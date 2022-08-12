import Notiflix from 'notiflix';

const form = document.querySelector('.form')
const input1 = document.querySelector('.form input[name="delay"]')
const input2 = document.querySelector('.form input[name="step"]')
const input3 = document.querySelector('.form input[name="amount"]')

function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;
 return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
 });
}

function submitForm(e) {
  const delay = Number(input1.value)
const step = Number(input2.value)
const amount = Number(input3.value)
  e.preventDefault();
  for (let i = 0; i < amount; i += 1){
      let realDel = delay + step * i;
     let position = i+1
 
  createPromise(position, realDel)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    // delay + step;
    }
}
form.addEventListener('submit', submitForm )