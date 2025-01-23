const message = document.querySelector<HTMLDivElement>('#message')!;
const count = document.querySelector<HTMLDivElement>('#count')!;

let counter = 0;
let intervalId: number;

onload = () => {
  counter = 9;
  intervalId = setInterval(hide, 1000); 
  message.style.opacity = "1";
};

const hide = () => {
  if (counter === 0) {
    clearInterval(intervalId); 
    message.style.opacity = "0"; 
    count.textContent = `${counter}`; 
  } else {
    count.textContent = `0${counter}`; 
    counter -= 1; 
  }
};
