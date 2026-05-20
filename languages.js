const translations = {
    es: {
        createAccount: "Crear Cuenta",
        signIn: "Iniciar Sesión",
        signUp: "Registrarse",
        welcomeBack: "¡Bienvenido de Nuevo!",
        helloFriend: "¡Hola Artista!",
        keepConnected: "Para mantenerte conectado por favor usa un perfil asociado",
        enterPersonalDetails: "Artista, ingresa tus datos para empezar el viaje",
        orUseEmail: "O usa un email asociado para registrar",
        orUseAccount: "O usa tu cuenta Asociada",
        forgotPassword: "Olvidaste la clave?",
        name: "Nombre",
        email: "Email",
        password: "Contraseña",
        menu: "Menú",
        library: "Biblioteca",
        playlists: "Playlists",
        logout: "Cerrar sesión",
        search: "Buscar canciones, artistas...",
        play: "Reproducir",
        genres: "Géneros",
        viewAll: "Ver Todos",
        topSongs: "Top Canciones",
        music: "Música",
        news: "Noticias",
        popular: "Popular",
        trending: "Tendencias",
        player: "Reproductor", 
        lyrics: "LETRA"
    },
    en: {
        createAccount: "Create Account",
        signIn: "Sign In",
        signUp: "Sign Up",
        welcomeBack: "Welcome Back!",
        helloFriend: "Hello Artist!",
        keepConnected: "To keep connected please use an associated profile",
        enterPersonalDetails: "Artist, enter your details to start the journey",
        orUseEmail: "or use an associated email to register",
        orUseAccount: "or use your associated account",
        forgotPassword: "Forgot your password?",
        name: "Name",
        email: "Email",
        password: "Password",
        menu: "Menu",
        library: "Library",
        playlists: "Playlists",
        logout: "Logout",
        search: "Search songs, artists...",
        play: "Play",
        genres: "Genres",
        viewAll: "View All",
        topSongs: "Top Songs",
        music: "Music",
        news: "News",
        popular: "Popular",
        trending: "Trending",
        player: "Player",
        lyrics: "LYRICS"
    }
};

let currentLang = localStorage.getItem('language') || 'es';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
    updateLanguageButtons(lang);
}

function updatePageLanguage() {
    const t = translations[currentLang];
    if (!t) return;
    
  
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' && el.type !== 'button' && el.type !== 'submit') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
}

function updateLanguageButtons(activeLang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === activeLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function initLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    updatePageLanguage();
    updateLanguageButtons(currentLang);
}


window.setLanguage = setLanguage;
window.initLanguage = initLanguage;