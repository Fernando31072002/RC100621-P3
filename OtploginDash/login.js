// Archivo JavaScript para la página de login

// Función para generar código OTP aleatorio de 6 dígitos
function generarOTP() {
    // Genera un número aleatorio entre 100000 y 999999
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Función para validar formato de email
function validarEmail(email) {
    // Expresión regular para validar formato de email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Al cargar la página, verificar si ya hay sesión activa
document.addEventListener('DOMContentLoaded', function() {
    // Si el usuario ya está autenticado, redirigir al dashboard
    const sesionActiva = localStorage.getItem('isAuthenticated');
    if (sesionActiva === 'true') {
        window.location.href = 'dashboard.html';
        return;
    }
    
    // Limpiar cualquier dato previo de OTP
    localStorage.removeItem('otpCode');
    localStorage.removeItem('otpTimestamp');
    localStorage.removeItem('userEmail');
});

// Obtener elementos del DOM
const emailInput = document.getElementById('email');
const sendOtpBtn = document.getElementById('sendOtpBtn');
const otpDisplay = document.getElementById('otpDisplay');
const otpCodeSpan = document.getElementById('otpCode');
const continueBtn = document.getElementById('continueBtn');

// Evento click para el botón "Enviar OTP"
sendOtpBtn.addEventListener('click', function() {
    const email = emailInput.value.trim();
    
    // Validar que el email no esté vacío
    if (!email) {
        alert('Por favor, ingresa tu correo electrónico');
        emailInput.focus();
        return;
    }
    
    // Validar formato del email
    if (!validarEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido');
        emailInput.focus();
        return;
    }
    
    // Generar código OTP de 6 dígitos
    const otpCode = generarOTP();
    
    // Guardar datos en localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('otpCode', otpCode);
    // Guardar timestamp actual para validar expiración (10 minutos)
    localStorage.setItem('otpTimestamp', Date.now().toString());
    
    // Mostrar el código OTP generado en la pantalla
    otpCodeSpan.textContent = otpCode;
    otpDisplay.classList.remove('hidden');
    
    // Ocultar el botón de enviar OTP
    sendOtpBtn.style.display = 'none';
    emailInput.disabled = true;
});

// Evento click para el botón "Continuar a Verificación"
continueBtn.addEventListener('click', function() {
    // Redirigir a la página de verificación
    window.location.href = 'verify.html';
});

// Permitir enviar con Enter en el campo de email
emailInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendOtpBtn.click();
    }
});
