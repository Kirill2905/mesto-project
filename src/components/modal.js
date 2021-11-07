import {popup, profileName, profilehobby, nameInput, jobInput} from '../components/constants';

const closeEscape = (evt) => {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened")
    closePopup(popup);
  }
}

const closeClick = (evt) => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

export const openPopup = (popupElement) => {
  popupElement.classList.add("popup_opened");
  document.addEventListener('keydown', closeEscape)
  popupElement.addEventListener('click', closeClick);
}

export const closePopup = (popupElement) => {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeEscape);
  popupElement.removeEventListener('click', closeClick);
}

function nameInPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profilehobby.textContent;
}
nameInPopup();

export const formSubmitHandler = evt => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profilehobby.textContent = jobInput.value;
  closePopup(popup);
}
