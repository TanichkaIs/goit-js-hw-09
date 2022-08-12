function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const body = document.querySelector('body');
  const startBtn = document.querySelector('button[data-start]');
  const stopBtn = document.querySelector('button[data-stop]');
  stopBtn.setAttribute('disabled', true);
  function changeColor(){
  body.style.background = getRandomHexColor();
  }
  
  
  let timerId = null;
  
  startBtn.addEventListener("click", () => {
      startBtn.setAttribute('disabled', true);
        stopBtn.removeAttribute('disabled')
    timerId = setInterval(() => {
        changeColor();
       
        startBtn.setAttribute('disabled', true);
        stopBtn.removeAttribute('disabled')
    }, 1000);
  });
  stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled')
        stopBtn.setAttribute('disabled', true);
  });
  
