// login.js - Lógica para la página de login/registro

const container = document.getElementById('container');
const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');

// Configurar formularios
if (signUpButton && signInButton && container) {
    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });
}

// Inicializar tema e idioma
document.addEventListener('DOMContentLoaded', function() {
    if (typeof initTheme === 'function') {
        initTheme();
    }
    
    if (typeof initLanguage === 'function') {
        initLanguage();
    }
});

function handleSignIn() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    
    if (!email || !password) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    const userName = email.split('@')[0];
    
    localStorage.setItem('musicPlayerUser', JSON.stringify({
        email: email,
        name: userName,
        loginTime: new Date().toISOString()
    }));
    
    // Redirigir al reproductor
    window.location.href = 'player.html';
}

function handleSignUp() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    if (!name || !email || !password) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    localStorage.setItem('musicPlayerUser', JSON.stringify({
        email: email,
        name: name,
        registeredAt: new Date().toISOString()
    }));
    
    // Redirigir al reproductor
    window.location.href = 'player.html';
}

window.handleSignIn = handleSignIn;
window.handleSignUp = handleSignUp;