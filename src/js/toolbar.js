const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyRef = document.querySelector('body');
bodyRef.classList.add(Theme.LIGHT);

inputRef = document.querySelector('.js-switch-input');
console.dir(inputRef);

function onReplacementTheme(oldTheme, newTheme) {
  bodyRef.classList.remove(oldTheme);
  bodyRef.classList.add(newTheme);
  localStorage.setItem('Theme', newTheme);
}

function onChangeTheme(event) {
  if (event.target.checked) {
    onReplacementTheme(Theme.LIGHT, Theme.DARK);
  }

  if (!event.target.checked) {
    onReplacementTheme(Theme.DARK, Theme.LIGHT);
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
