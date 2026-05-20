const themes = {
    light: {
        '--bg-primary': '#ffffff',
        '--bg-secondary': '#f5f5f5',
        '--bg-card': '#f9f9f9',
        '--text-primary': '#333333',
        '--text-secondary': '#666666',
        '--text-muted': '#999999',
        '--border-color': '#e0e0e0',
        '--sidebar-bg': '#f8f9fa',
        '--gradient-start': '#667eea',
        '--gradient-end': '#764ba2',
        '--accent-color': '#FF416C',
        '--overlay-bg': 'linear-gradient(to right, #FF4B2B, #FF416C)',
        '--login-gradient-start': '#6900f1',
        '--login-gradient-mid': '#522183',
        '--login-gradient-end': '#260844',
        '--input-bg': '#eeeeee'
    },
    dark: {
        '--bg-primary': '#1a1a2e',
        '--bg-secondary': '#16213e',
        '--bg-card': '#0f0f1f',
        '--text-primary': '#ffffff',
        '--text-secondary': '#e0e0e0',
        '--text-muted': '#a0a0a0',
        '--border-color': '#2a2a3a',
        '--sidebar-bg': '#0a0a1a',
        '--gradient-start': '#1e1e2f',
        '--gradient-end': '#2d2d44',
        '--accent-color': '#FF416C',
        '--overlay-bg': 'linear-gradient(to right, #FF4B2B, #FF416C)',
        '--login-gradient-start': '#2d0b5e',
        '--login-gradient-mid': '#1f0a3a',
        '--login-gradient-end': '#0f0520',
        '--input-bg': '#2a2a3a'
    }
};

let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    const themeColors = themes[theme];
    if (!themeColors) return;
    
    Object.keys(themeColors).forEach(variable => {
        document.documentElement.style.setProperty(variable, themeColors[variable]);
    });
    
    localStorage.setItem('theme', theme);
    currentTheme = theme;
    updateThemeIcon(theme);
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

function updateThemeIcon(theme) {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        if (theme === 'light') {
            themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
            themeToggle.title = 'Modo Oscuro';
        } else {
            themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
            themeToggle.title = 'Modo Claro';
        }
    }
}

function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && themes[savedTheme]) {
        applyTheme(savedTheme);
    } else {
        applyTheme(detectSystemTheme());
    }
    window.toggleTheme = toggleTheme;
window.initTheme = initTheme;
}