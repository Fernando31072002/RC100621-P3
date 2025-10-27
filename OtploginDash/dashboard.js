// Archivo JavaScript para el dashboard del usuario

// Array de consejos aleatorios estilo IA para el juego
const CONSEJOS_JUEGO = [
    "💰 Consejo: Guarda monedas para la invocación 10x y obtén mejores recompensas",
    "⭐ Consejo: Chasca otorga suerte extra en las invocaciones premium",
    "🎯 Consejo: Completa las misiones diarias para ganar monedas adicionales",
    "🔥 Consejo: Las invocaciones en horario nocturno tienen mejor tasa de éxito",
    "💎 Consejo: Acumula 50,000 monedas para desbloquear invocaciones legendarias",
    "🎲 Consejo: Usa el modo ahorro para duplicar tus recompensas semanales",
    "⚡ Consejo: Los eventos especiales ofrecen el triple de monedas",
    "🌟 Consejo: Combina personajes del mismo elemento para bonificaciones",
    "🏆 Consejo: Participa en torneos para ganar monedas y objetos raros",
    "🎁 Consejo: Inicia sesión diariamente para recibir bonos de fidelidad",
    "🔮 Consejo: Las invocaciones grupales tienen mejor probabilidad de éxito",
    "💫 Consejo: Guarda tus gemas para banners de personajes limitados"
];

// Al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Verificar que el usuario esté autenticado
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    if (isAuthenticated !== 'true') {
        // Si no está autenticado, redirigir al login
        alert('Debes iniciar sesión primero');
        window.location.href = 'index.html';
        return;
    }
    
    // Cargar y mostrar información del usuario
    cargarInformacionUsuario();
    
    // Generar y mostrar consejos aleatorios
    mostrarConsejosAleatorios();
});

// Función para cargar información del usuario
function cargarInformacionUsuario() {
    // Obtener email del usuario
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        document.getElementById('userEmail').textContent = userEmail;
    }
    
    // Obtener y mostrar balance de monedas
    let coinBalance = localStorage.getItem('coinBalance');
    
    // Si no existe balance, inicializar con 5000
    if (!coinBalance) {
        coinBalance = '5000';
        localStorage.setItem('coinBalance', coinBalance);
    }
    
    document.getElementById('coinBalance').textContent = formatearNumero(coinBalance);
}

// Función para formatear números con separadores de miles
function formatearNumero(numero) {
    return parseInt(numero).toLocaleString('es-ES');
}

// Función para seleccionar 3 consejos aleatorios únicos
function seleccionarConsejosAleatorios() {
    const consejosSeleccionados = [];
    const indicesUsados = new Set();
    
    // Seleccionar 3 consejos únicos aleatoriamente
    while (consejosSeleccionados.length < 3) {
        const indiceAleatorio = Math.floor(Math.random() * CONSEJOS_JUEGO.length);
        
        // Solo agregar si no se ha usado este índice
        if (!indicesUsados.has(indiceAleatorio)) {
            indicesUsados.add(indiceAleatorio);
            consejosSeleccionados.push(CONSEJOS_JUEGO[indiceAleatorio]);
        }
    }
    
    return consejosSeleccionados;
}

// Función para mostrar los consejos aleatorios en el DOM
function mostrarConsejosAleatorios() {
    const tipsContainer = document.getElementById('tipsContainer');
    const consejosAleatorios = seleccionarConsejosAleatorios();
    
    // Limpiar contenedor
    tipsContainer.innerHTML = '';
    
    // Crear elemento HTML para cada consejo
    consejosAleatorios.forEach(function(consejo) {
        const tipElement = document.createElement('div');
        tipElement.className = 'tip-item';
        
        const tipText = document.createElement('p');
        tipText.textContent = consejo;
        
        tipElement.appendChild(tipText);
        tipsContainer.appendChild(tipElement);
    });
}

// Obtener botón de logout
const logoutBtn = document.getElementById('logoutBtn');

// Evento click para el botón de cerrar sesión
logoutBtn.addEventListener('click', function() {
    // Confirmar antes de cerrar sesión
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        cerrarSesion();
    }
});

// Función para cerrar sesión del usuario
function cerrarSesion() {
    // Limpiar todos los datos de sesión del localStorage
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('otpCode');
    localStorage.removeItem('otpTimestamp');
    localStorage.removeItem('loginTimestamp');
    
    // Nota: Mantenemos coinBalance para que persista entre sesiones
    // Si quieres que las monedas también se borren, descomenta la siguiente línea:
    // localStorage.removeItem('coinBalance');
    
    // Redirigir a la página de login
    window.location.href = 'index.html';
}
