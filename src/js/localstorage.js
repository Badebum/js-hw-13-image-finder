const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
}

const bodyRef = document.querySelector('body');
const switchRef = document.querySelector('#theme-switch-toggle');

switchRef.addEventListener('change', handleCheckbox);

reloadTheme();

function handleCheckbox() {
    if (switchRef.checked) {
        bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

function reloadTheme() {
    if (localStorage.getItem('theme') === Theme.DARK) {
        bodyRef.classList.add(Theme.DARK);
        switchRef.checked = true;
    }
}