const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyRef = document.querySelector('body');
bodyRef.classList.add(Theme.LIGHT);

inputRef = document.querySelector('.js-switch-input');
console.log(inputRef);

function onChangeTheme(event) {
  if (event.target.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.removeItem('Theme', JSON.stringify(Theme.LIGHT));
    localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
  }

  if (!event.target.checked) {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    localStorage.removeItem('Theme', JSON.stringify(Theme.DARK));
    localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
  }
}

const valueTheme = getItem('Theme');
console.log(valueTheme);

inputRef.addEventListener('change', onChangeTheme);
