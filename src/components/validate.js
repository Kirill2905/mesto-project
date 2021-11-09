import { config } from './constants';

const isFormValid = inputList => {
  return inputList.every(inputElement => inputElement.validity.valid);
}

const hideInputError = inputElement => {
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = '';
  inputElement.classList.remove(config.inputErrorClass);
};

const showInputError = inputElement => {
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
};

const toggleButtonState = (buttonElement, inputList) => {
  if(isFormValid(inputList)) {
    buttonElement.disabled = false;
  }else{
    buttonElement.disabled = true;
  }
}

const checkInputValidity = inputElement => {
  if(inputElement.validity.valid){
    hideInputError(inputElement);
  }else{
    showInputError(inputElement);
  }
};

const setEventListeners = formElement => {
  formElement.addEventListener('submit', e => {
    e.preventDefault();
  });
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const submitButton = formElement.querySelector(config.buttonSelector);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement);
      toggleButtonState(submitButton, inputList);
    });
    toggleButtonState(submitButton, inputList);
  });
}

export const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(formElement => {
    setEventListeners(formElement);
  });
};
