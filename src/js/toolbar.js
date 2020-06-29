const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyRef = document.querySelector('body');
bodyRef.classList.add(Theme.LIGHT);

inputRef = document.querySelector('.js-switch-input');
console.dir(inputRef);

function onChangeTheme(event) {
  if (event.target.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  }

  if (!event.target.checked) {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}
const valueTheme = localStorage.getItem('Theme');
const parseValueTheme = valueTheme;

if (parseValueTheme === Theme.DARK) {
  bodyRef.classList.remove(Theme.LIGHT);
  bodyRef.classList.add(Theme.DARK);
  inputRef.checked = true;
}

inputRef.addEventListener('change', onChangeTheme);
