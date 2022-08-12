import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

let inputDates = null;
  const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
   
    inputDates = selectedDates[0];
      if (inputDates <= new Date()) {
       startBtn.setAttribute('disabled', true);
          Notiflix.Notify.warning('Please choose a date in the future');
      }
      else {
          startBtn.removeAttribute('disabled');
      }
  },
};


const startBtn = document.querySelector('button[data-start]')
const calendar = document.querySelector('#datetime-picker')
const daysSpan = document.querySelector('span[data-days]')
const hoursSpan = document.querySelector('span[data-hours]')
const minutesSpan = document.querySelector('span[data-minutes]')
const secondsSpan = document.querySelector('span[data-seconds]')
startBtn.setAttribute('disabled', true);
flatpickr(calendar, options)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    daysSpan.textContent = addLeadingZero(days)
    hoursSpan.textContent = addLeadingZero(hours)
    minutesSpan.textContent = addLeadingZero(minutes)
    secondsSpan.textContent = addLeadingZero(seconds)
    function addLeadingZero(value) {
  return String(value).padStart(2, '0');
    }
    
    return { days, hours, minutes, seconds };
    
}


const timer = (targetDate) => { const timerID =
    setInterval(() => {
        const delta = new Date(targetDate) - new Date();
       convertMs(delta)
      if (delta < 1000) {
          clearInterval(timerID);
          Notiflix.Notify.warning('time is over');
    }
        
    },1000)
}

function startTimer() {
    timer(inputDates)
    
}
startBtn.addEventListener('click', startTimer)