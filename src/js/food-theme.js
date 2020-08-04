import { Theme } from './theme';

const inputRef = document.querySelector('input.js-switch-input');
const bodyEl = document.querySelector('body');
inputRef.addEventListener('change', inputFoodTheme);
populateStorage();

function inputFoodTheme() {
  if (inputRef.checked === false) {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
  } else if (inputRef.checked == true) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
  }

  const inputValue = bodyEl.className;
  localStorage.setItem('input-theme', inputValue);
}

function populateStorage() {
  const savedTheme = localStorage.getItem('input-theme');
  if (savedTheme) {
    bodyEl.className = savedTheme;
    if (bodyEl.className === Theme.DARK) {
      inputRef.checked = true;
    }
  }
}
