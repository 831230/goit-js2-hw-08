var throttle = require('lodash.throttle'); 

const feedbackForm=document.querySelector(".feedback-form");
const localstorageKey="feedback-form-state";

if (localStorage.getItem(localstorageKey)) {
    const emailInStorage=localStorage.getItem(localstorageKey);
    const messageInStorage=localStorage.getItem(localstorageKey);
    console.log(JSON.parse(emailInStorage).email, JSON.parse(messageInStorage).message);
    feedbackForm.elements.email.value=JSON.parse(emailInStorage).email;
    feedbackForm.elements.message.value=JSON.parse(messageInStorage).message;
};

function setObjectToLocalstorage (evt){
  evt.preventDefault();
  const formObject={
    email:feedbackForm.elements.email.value,
    message:feedbackForm.elements.message.value
  };
  localStorage.setItem(localstorageKey,JSON.stringify(formObject));
};

function formHandling(evt){
  evt.preventDefault();
  const formObject={
    email:feedbackForm.elements.email.value,
    message:feedbackForm.elements.message.value
  };
  console.log(formObject);
  feedbackForm.reset();
  localStorage.clear()
};

feedbackForm.addEventListener("input", setObjectToLocalstorage);
feedbackForm.addEventListener("submit", formHandling);