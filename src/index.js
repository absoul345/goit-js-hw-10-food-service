import './styles.css';
import './join.js';

const switcher = document.querySelector('#theme-switch-toggle');

switcher.addEventListener('change', changeTheme);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

function changeTheme(evt) {
    if (evt.target.checked) {
        currentTheme(Theme.LIGHT, Theme.DARK);
        updateLocalTheme('theme', Theme.DARK);
    } else {
        currentTheme(Theme.DARK, Theme.LIGHT);
        updateLocalTheme('theme', Theme.LIGHT);
    }
}

function currentTheme(currentTheme, newTheme) {
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
}

function updateLocalTheme(name, newTheme) {
    localStorage.setItem(name, newTheme);
}

function saveTheme() {
    const theme = localStorage.getItem('theme') ?? Theme.LIGHT;
    document.body.classList.add(theme);
    switcher.checked = theme === Theme.DARK;
}

saveTheme();



