








// const feedbackFormEl = document.querySelector('.js-feedback-form');
// let formData = {
//   email: "",
//   message: "",
// };

// const fillFormFields = () => {
//   try {
//     const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-data'));
//     if (!formDataFromLS) return;

//     formData = formDataFromLS;
    
//     for (const key in formDataFromLS) {
//       feedbackFormEl.elements[key].value = formDataFromLS[key].trim();
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// fillFormFields();

// const onFormFieldInput = event => {
//   const { name, value } = event.target;
//   formData[name] = value.trim();

//   localStorage.setItem('feedback-form-data', JSON.stringify(formData));
// };

// const onFeedbackFormSubmit = event => {
//   event.preventDefault();
//   for (const key in formData) {
//     if (!formData[key].trim()) {
//       alert('Fill please all fields');
//       return;
//     }
//   }
//     console.log(formData);
//     event.target.reset();
//   localStorage.removeItem('feedback-form-data');
//   formData = {
//   email: "",
//   message: "",
// };
// };

// feedbackFormEl.addEventListener('input', onFormFieldInput);
// feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);