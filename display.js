const showSection = (className) => {
  const sections = document.getElementsByClassName(className);
  for (let i = 0; i < sections.length; ++i) sections[i].style.display = 'block';
};

const showAll = () => {
  showSection('anchor');
  showSection('blue');
  showSection('red');
  document.getElementsByTagName('main')[0].style.alignItems = 'center';
};

const setDisplay = (day) => {
  if (day == 1) showSection('anchor');
  else if (day == 2 || day == 4) showSection('blue');
  else if (day == 3 || day == 5) showSection('red');
  else showAll();
};

setDisplay(new Date().getDay());

const showAllButton = document.getElementsByClassName('toggle-link')[0];
showAllButton.addEventListener('click', () => {
  showAll();
});
