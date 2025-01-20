const btn = document.querySelector<HTMLButtonElement>('#start-btn');
const zeit = document.querySelector<HTMLParagraphElement>('#zeit');

let counter = 0;
let intervalId: number 

btn?.addEventListener('click', () => {
  counter = 100;
  btn.textContent = 'START';
  

  intervalId = setInterval(() => {
    if (counter <= 0) {
      clearInterval(intervalId!);
  
      zeit!.textContent = 'YEAH!';
      btn.textContent = 'Click Again';
    } else {
      zeit!.textContent = `${counter--}%`;
    }
  }, 500);
});