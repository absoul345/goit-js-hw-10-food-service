import menuData from "./menu.json"
import makeMarkup from "./templates/menu.hbs"

const menuRef = document.querySelector('.js-menu');
const markup = makeMarkup(menuData);



menuRef.innerHTML = markup;