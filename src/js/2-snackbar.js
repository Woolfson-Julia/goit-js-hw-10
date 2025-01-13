import iziToast from "izitoast";

const inputDelayForm = document.querySelector('.js-input');
const formSubmit = document.querySelector('.js-form');



const getSelectedState = () => {
  const selectedRadio = document.querySelector('input[name="state"]:checked');
  if (selectedRadio) {
    return selectedRadio.value;
  }
  return null;
}

const createPromise = (state, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else if (state === 'rejected') {
        reject(`Rejected promise in ${delay}ms`);
      } else {
        return;
      }
    }, delay);
  })
};
    

const onCreatePromise = (event) => {
  event.preventDefault();
  const state = getSelectedState();
  const delay = parseInt(inputDelayForm.value, 10);
  if (!isNaN(delay) && delay >= 0) {
if (state) {
    createPromise(state, delay)
      .then(result => {
        iziToast.success({
          message: result
      })
      })
      .catch(error => {
        iziToast.error({
          message: error
        })
      });
  }
}
  }
  
  

  






formSubmit.addEventListener('submit', onCreatePromise);
