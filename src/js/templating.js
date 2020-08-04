import itemsTemplate from '../template/foog-menu.hbs';
import itemsFoodMenu from '../menu.json';


const markup = itemsTemplate(itemsFoodMenu);
const galleryFood = document.querySelector('.js-menu');
galleryFood.insertAdjacentHTML('beforeend', markup);