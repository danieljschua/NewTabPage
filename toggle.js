const toggleButton = document.getElementsByClassName('toggle-button')[0];
const aside = document.getElementsByTagName('aside')[0];
const nav = document.getElementsByClassName('sidenav')[0];

toggleButton.addEventListener('click', () => {
  aside.classList.toggle('active');
  nav.classList.toggle('active');
  console.log('active toggled!');
});