// player.js - Lógica del reproductor
const userNameElement = document.getElementById('user-name');

document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay sesión
    const savedUser = localStorage.getItem('musicPlayerUser');
    if (!savedUser) {
        window.location.href = 'home.html';
        return;
    }
    
    // Inicializar tema e idioma
    if (typeof initTheme === 'function') {
        initTheme();
    }
    
    if (typeof initLanguage === 'function') {
        initLanguage();
    }
    
    // Mostrar nombre del usuario
    const user = JSON.parse(savedUser);
    if (userNameElement) {
        userNameElement.textContent = user.name;
    }
});

function handleLogout() {
    localStorage.removeItem('musicPlayerUser');
    window.location.href = 'home.html';
}

function navigateTo(section) {
    console.log(`Navegando a: ${section}`);
    document.querySelectorAll('#player-view .sidebar li').forEach(li => {
        li.classList.remove('active');
    });
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

window.navigateTo = navigateTo;
window.handleLogout = handleLogout;