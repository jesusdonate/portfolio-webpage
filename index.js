const MOON_ICON = document.getElementById('moon-icon')
const SUN_ICON = document.getElementById('sun-icon')
const BARS_ICON = document.getElementById('bars-icon')
const MAIN_CONTAINER = document.getElementById('main-container')
const NAV_MENU_CONTAINER = document.getElementById('nav-menu-container')
const X_MARK = document.getElementById('x-mark')
const MENU_WELCOME = document.getElementById('menu-welcome')
const MENU_ABOUT_ME = document.getElementById('menu-about-me')
const MENU_PROJECT = document.getElementById('menu-project')
const MENU_CONTACT = document.getElementById('menu-contact')

// Dark Theme Colors
const DARK_COLOR1 = "rgb(255, 185, 97)";
const DARK_COLOR1_TRANS = "rgba(255, 185, 97, 0.6)";
const DARK_COLOR2 = "rgb(243, 130, 111)";
const DARK_COLOR2_TRANS = "rgba(243, 130, 111, 0.6)";
const DARK_COLOR3 = "rgb(192, 92, 126)";
const DARK_COLOR3_TRANS = "rgba(192, 92, 126, 0.6)";
const DARK_COLOR4 = "rgb(114, 45, 97)";
const DARK_COLOR4_TRANS = "rgba(114, 45, 97, 0.6)";
const DARK_COLOR5 = "rgb(45, 53, 97)";
const DARK_COLOR5_TRANS = "rgba(45, 53, 97, 0.6)";
const DARK_FONT_COLOR = "rgb(255, 194, 170)";

// Light Theme Colors
const LIGHT_COLOR1 = "rgb(255, 233, 208)";
const LIGHT_COLOR1_TRANS = "rgba(255, 233, 208, 0.6)";
const LIGHT_COLOR2 = "rgb(255, 204, 197)";
const LIGHT_COLOR2_TRANS = "rgba(255, 204, 197, 0.6)";
const LIGHT_COLOR3 = "rgb(245, 191, 209)";
const LIGHT_COLOR3_TRANS = "rgba(245, 191, 209, 0.6)";
const LIGHT_COLOR4 = "rgb(226, 200, 228)";
const LIGHT_COLOR4_TRANS = "rgba(226, 200, 228, 0.6)";
const LIGHT_COLOR5 = "rgb(171, 182, 225)";
const LIGHT_COLOR5_TRANS = "rgba(147, 158, 204, 0.6)";
const LIGHT_FONT_COLOR = "rgb(80, 50, 30)";


const getThemeColor = () => {
    const theme_color = localStorage.getItem('theme_color')
    if (!theme_color) {
        localStorage.setItem('theme_color', 'dark')
        return 'dark'
    } 
    return theme_color
}

const setThemeColor = (theme_color) => {
    localStorage.setItem('theme_color', theme_color)
}

// Changes the icon based on current theme color
const changeIcon = (theme_color) => {
    if (theme_color === 'light') {
        SUN_ICON.style.display = 'block'
        MOON_ICON.style.display = 'none'
    } else if (theme_color === 'dark') {
        MOON_ICON.style.display = 'block'
        SUN_ICON.style.display = 'none'
    }
}

// Changes all colors depending on theme
const changeColors = (theme_color) => {
    const root = document.documentElement

    if (theme_color === 'light') {
        root.style.setProperty('--color1', LIGHT_COLOR1)
        root.style.setProperty('--color1-trans', LIGHT_COLOR1_TRANS)
        root.style.setProperty('--color2', LIGHT_COLOR2)
        root.style.setProperty('--color2-trans', LIGHT_COLOR2_TRANS)
        root.style.setProperty('--color3', LIGHT_COLOR3)
        root.style.setProperty('--color3-trans', LIGHT_COLOR3_TRANS)
        root.style.setProperty('--color4', LIGHT_COLOR4)
        root.style.setProperty('--color4-trans', LIGHT_COLOR4_TRANS)
        root.style.setProperty('--color5', LIGHT_COLOR5)
        root.style.setProperty('--color5-trans', LIGHT_COLOR5_TRANS)
        root.style.setProperty('--font-color', LIGHT_FONT_COLOR)
    } else if (theme_color === 'dark') {
        root.style.setProperty('--color1', DARK_COLOR1)
        root.style.setProperty('--color1-trans', DARK_COLOR1_TRANS)
        root.style.setProperty('--color2', DARK_COLOR2)
        root.style.setProperty('--color2-trans', DARK_COLOR2_TRANS)
        root.style.setProperty('--color3', DARK_COLOR3)
        root.style.setProperty('--color3-trans', DARK_COLOR3_TRANS)
        root.style.setProperty('--color4', DARK_COLOR4)
        root.style.setProperty('--color4-trans', DARK_COLOR4_TRANS)
        root.style.setProperty('--color5', DARK_COLOR5)
        root.style.setProperty('--color5-trans', DARK_COLOR5_TRANS)
        root.style.setProperty('--font-color', DARK_FONT_COLOR)
    }
}

const changeTheme = () => {
    const theme_color = getThemeColor()
    const new_theme_color = theme_color === 'dark' ? 'light' : 'dark'

    changeIcon(new_theme_color)
    changeColors(new_theme_color)
    setThemeColor(new_theme_color)
}

const loadTheme = () => {
    const theme_color = getThemeColor()
    changeIcon(theme_color)
    changeColors(theme_color)
}

function showNavMenu() {
    MAIN_CONTAINER.style.setProperty('display', 'none')
    BARS_ICON.style.setProperty('display', 'none')
    NAV_MENU_CONTAINER.style.setProperty('display', 'block')
    X_MARK.style.setProperty('display', 'block')
}

function closeNavMenu() {
    MAIN_CONTAINER.style.setProperty('display', 'block')
    BARS_ICON.style.setProperty('display', 'block')
    NAV_MENU_CONTAINER.style.setProperty('display', 'none')
    X_MARK.style.setProperty('display', 'none')
}


// Handles navigation menu item clicks
function handleMenuItemClick(event) {
    event.preventDefault();

    const targetSectionId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);

    MAIN_CONTAINER.style.setProperty('display', 'block');
    NAV_MENU_CONTAINER.style.setProperty('display', 'none');

    BARS_ICON.style.setProperty('display', 'block');
    X_MARK.style.setProperty('display', 'none');

    targetSection.scrollIntoView({ behavior: 'smooth' });
} 


// Event listeners
MOON_ICON.addEventListener('click', changeTheme)
SUN_ICON.addEventListener('click', changeTheme)
BARS_ICON.addEventListener('click', showNavMenu)
X_MARK.addEventListener('click', closeNavMenu)
document.addEventListener('DOMContentLoaded', loadTheme)
document.querySelectorAll('.menu-item a').forEach((menuLink) => {
    menuLink.addEventListener('click', handleMenuItemClick);
    });
