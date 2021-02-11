const searchButton = document.getElementsByClassName('search-button')[0];
const input = document.getElementById('search-input');

function searchURL() {
  const search = input.value.replace(' ', '+');
  window.open('https://www.google.com/search?q=' + search, '_self');
  input.value = '';
}

searchButton.addEventListener('click', searchURL);

input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter')
    searchURL();
});