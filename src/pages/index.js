import './index.css';
import {initialCards, popup, popupClose, editButton, popupAdd, popupClosed, addButton} from '../components/constants';
import {enableValidation} from '../components/validate';
import {openPopup, closePopup, formSubmitHandler} from '../components/modal';
import {card} from '../components/cards';

enableValidation();

popup.addEventListener("submit", formSubmitHandler);

editButton.addEventListener("click", function () {
  openPopup(popup);
});

popupClose.addEventListener("click", function () {
  closePopup(popup);
});

addButton.addEventListener("click", function () {
  openPopup(popupAdd);
});

popupClosed.addEventListener("click", function () {
  closePopup(popupAdd);
});

initialCards.forEach(card);
