# OTP Authentication Web App (Simulación)

## Descripción General
Aplicación web de autenticación OTP (One-Time Password) simulada que permite a los usuarios iniciar sesión usando códigos de verificación temporales. La aplicación incluye un dashboard de juego con balance de monedas y consejos aleatorios.

## Características Principales

### 1. Página de Login (index.html)
- Campo de entrada de email con validación
- Generación de código OTP aleatorio de 6 dígitos
- Simulación visual de "envío de OTP" (no requiere Firebase)
- Código mostrado en pantalla para facilitar pruebas

### 2. Página de Verificación (verify.html)
- Validación del código OTP ingresado
- Temporizador de cuenta regresiva de 10 minutos
- Expiración automática del código después de 10 minutos
- Mensajes de error para códigos incorrectos o expirados

### 3. Dashboard (dashboard.html)
- Balance inicial de 5000 monedas
- Botón "Jugar Ahora" que enlaza al juego externo
- Sección de 3 consejos aleatorios sobre el juego
- Botón de cierre de sesión

## Tecnologías Utilizadas
- **HTML5**: Estructura de las páginas
- **CSS3**: Diseño responsive y estilos modernos
- **JavaScript (Vanilla)**: Lógica de autenticación y manejo de estado
- **localStorage**: Almacenamiento de sesión, email, monedas, y timestamps

## Estructura del Proyecto
```
/
├── index.html          # Página de login
├── verify.html         # Página de verificación OTP
├── dashboard.html      # Dashboard del usuario
├── styles.css          # Estilos compartidos (diseño móvil)
├── login.js           # Lógica de generación de OTP
├── verify.js          # Lógica de verificación y temporizador
├── dashboard.js       # Lógica del dashboard y consejos
└── replit.md          # Este archivo
```

## Flujo de Autenticación

1. **Login**: Usuario ingresa email → Se genera OTP de 6 dígitos → Código se muestra en pantalla
2. **Verificación**: Usuario ingresa código → Se valida contra localStorage → Timer de 10 minutos
3. **Dashboard**: Acceso al panel con monedas, link de juego, y consejos aleatorios
4. **Logout**: Limpia sesión y regresa al login

## Datos en localStorage

- `userEmail`: Email del usuario
- `otpCode`: Código OTP generado (6 dígitos)
- `otpTimestamp`: Timestamp de creación del OTP (para expiración)
- `isAuthenticated`: Estado de autenticación (true/false)
- `loginTimestamp`: Timestamp de inicio de sesión
- `coinBalance`: Balance de monedas (persiste entre sesiones)

## Características de Diseño

- **Responsive**: Optimizado para móviles y escritorio
- **Colores**: Fondo blanco con acentos azules (#2563eb)
- **Layout**: Centrado con tarjetas con sombras suaves
- **Tipografía**: Segoe UI para legibilidad moderna
- **Iconos**: Emojis para elementos visuales atractivos

## Comentarios del Código
Todos los archivos JavaScript contienen comentarios detallados en español que explican:
- Funcionalidad de cada función
- Lógica de validación
- Manejo de eventos
- Gestión de localStorage

## Enlace del Juego
URL del juego: https://gd.games/games/a9afd93f-5b27-45ab-bf47-dfc343d1c307

## Consejos Disponibles (12 total, se muestran 3 aleatorios)
1. Guardar monedas para invocación 10x
2. Chasca otorga suerte extra
3. Completar misiones diarias
4. Invocaciones nocturnas tienen mejor tasa
5. Acumular 50,000 para legendarias
6. Modo ahorro duplica recompensas
7. Eventos especiales triple monedas
8. Combinar personajes del mismo elemento
9. Torneos para ganar monedas
10. Bonos de inicio de sesión diario
11. Invocaciones grupales mejor probabilidad
12. Guardar gemas para banners limitados

## Próximas Características (Fase 2)
- Historial de transacciones de monedas
- Sistema de misiones diarias con recompensas
- Soporte para múltiples usuarios
- Página de configuración
- Animaciones de transición

## Fecha de Creación
20 de octubre, 2025

## Notas de Desarrollo
- Simulación completa sin backend real
- No se envían emails reales (todo es simulado visualmente)
- Los datos persisten en localStorage del navegador
- Para resetear la app, limpiar localStorage del navegador
