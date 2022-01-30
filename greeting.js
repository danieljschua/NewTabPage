const greeting = document.getElementsByClassName('greeting')[0];
const hour = new Date().getHours();
let msg;

if (hour < 12) msg = 'Good morning, Daniel.';
else msg = 'Good afternoon, Daniel.';

let index = 0;

const write = () => {
  greeting.innerText = msg.slice(0, index++);
  if (index > msg.length) return;
};

setInterval(write, 100);
