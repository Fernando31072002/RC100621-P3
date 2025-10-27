// Archivo JavaScript para la página de verificación de OTP

// Constante para duración del OTP (10 minutos en milisegundos)
const OTP_DURACION = 10 * 60 * 1000;

// Variable para almacenar el intervalo del temporizador
let temporizadorInterval;

// Al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Obtener datos del localStorage
    const userEmail = localStorage.getItem('userEmail');
    const otpCode = localStorage.getItem('otpCode');
    const otpTimestamp = localStorage.getItem('otpTimestamp');
    
    // Verificar que existan los datos necesarios
    if (!userEmail || !otpCode || !otpTimestamp) {
        // Si no hay datos, redirigir al login
        alert('No se encontró información de OTP. Por favor, inicia sesión nuevamente.');
        window.location.href = 'index.html';
        return;
    }
    
    // Verificar si el OTP ya expiró
    const tiempoTranscurrido = Date.now() - parseInt(otpTimestamp);
    if (tiempoTranscurrido >= OTP_DURACION) {
        alert('El código OTP ha expirado. Por favor, solicita uno nuevo.');
        limpiarDatosOTP();
        window.location.href = 'index.html';
        return;
    }
    
    // Mostrar el email del usuario
    document.getElementById('userEmail').textContent = userEmail;
    
    // Iniciar temporizador de cuenta regresiva
    iniciarTemporizador(otpTimestamp);
});

// Función para iniciar el temporizador de cuenta regresiva
function iniciarTemporizador(timestamp) {
    const timerElement = document.getElementById('timer');
    
    // Actualizar temporizador cada segundo
    temporizadorInterval = setInterval(function() {
        const tiempoTranscurrido = Date.now() - parseInt(timestamp);
        const tiempoRestante = OTP_DURACION - tiempoTranscurrido;
        
        // Si el tiempo se agotó
        if (tiempoRestante <= 0) {
            clearInterval(temporizadorInterval);
            alert('El código OTP ha expirado. Por favor, solicita uno nuevo.');
            limpiarDatosOTP();
            window.location.href = 'index.html';
            return;
        }
        
        // Convertir milisegundos a minutos y segundos
        const minutos = Math.floor(tiempoRestante / 60000);
        const segundos = Math.floor((tiempoRestante % 60000) / 1000);
        
        // Mostrar tiempo en formato MM:SS
        timerElement.textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;
    }, 1000);
}

// Función para limpiar datos de OTP del localStorage
function limpiarDatosOTP() {
    localStorage.removeItem('otpCode');
    localStorage.removeItem('otpTimestamp');
}

// Obtener elementos del DOM
const otpInput = document.getElementById('otpInput');
const verifyBtn = document.getElementById('verifyBtn');
const backBtn = document.getElementById('backBtn');
const errorMessage = document.getElementById('errorMessage');

// Evento click para el botón "Verificar Código"
verifyBtn.addEventListener('click', function() {
    verificarOTP();
});

// Función para verificar el código OTP ingresado
function verificarOTP() {
    const codigoIngresado = otpInput.value.trim();
    const otpCorrecto = localStorage.getItem('otpCode');
    
    // Validar que se haya ingresado un código
    if (!codigoIngresado) {
        mostrarError('Por favor, ingresa el código OTP');
        return;
    }
    
    // Validar que el código tenga 6 dígitos
    if (codigoIngresado.length !== 6) {
        mostrarError('El código debe tener 6 dígitos');
        return;
    }
    
    // Verificar si el código coincide
    if (codigoIngresado === otpCorrecto) {
        // Código correcto - autenticar usuario
        autenticarUsuario();
    } else {
        // Código incorrecto - mostrar error
        mostrarError('❌ Código incorrecto. Por favor, verifica e intenta nuevamente.');
        otpInput.value = '';
        otpInput.focus();
    }
}

// Función para mostrar mensaje de error
function mostrarError(mensaje) {
    errorMessage.textContent = mensaje;
    errorMessage.classList.remove('hidden');
    
    // Ocultar mensaje después de 3 segundos
    setTimeout(function() {
        errorMessage.classList.add('hidden');
    }, 3000);
}

// Función para autenticar al usuario y redirigir al dashboard
function autenticarUsuario() {
    // Detener el temporizador
    clearInterval(temporizadorInterval);
    
    // Marcar como autenticado
    localStorage.setItem('isAuthenticated', 'true');
    
    // Establecer timestamp de inicio de sesión
    localStorage.setItem('loginTimestamp', Date.now().toString());
    
    // Inicializar monedas si es la primera vez
    if (!localStorage.getItem('coinBalance')) {
        localStorage.setItem('coinBalance', '5000');
    }
    
    // Limpiar datos del OTP (ya no se necesitan)
    limpiarDatosOTP();
    
    // Redirigir al dashboard
    window.location.href = 'dashboard.html';
}

// Evento click para el botón "Volver al Login"
backBtn.addEventListener('click', function() {
    // Detener temporizador
    clearInterval(temporizadorInterval);
    
    // Limpiar datos y volver al login
    limpiarDatosOTP();
    window.location.href = 'index.html';
});

// Permitir verificar con Enter en el campo de OTP
otpInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        verificarOTP();
    }
});

// Solo permitir números en el input de OTP
otpInput.addEventListener('input', function(e) {
    // Remover cualquier caracter que no sea número
    this.value = this.value.replace(/[^0-9]/g, '');
});
