const searchButton = document.getElementsByClassName('search-button')[0];
const input = document.getElementById('search-input');

const searchURL = () => {
  const search = input.value.replace(' ', '+');
  window.open('https://www.google.com/search?q=' + search, '_self');
  input.value = '';
};

searchButton.addEventListener('click', searchURL);

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') searchURL();
});
