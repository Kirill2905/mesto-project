import './index.css';
import {initialCards, popup, popups, editButton, popupAdd, addButton, sumbitCardButton} from '../components/constants';
import {enableValidation} from '../components/validate';
import {openPopup, closePopup, submitProfileForm, insertProfileData} from '../components/modal';
import {prependCard} from '../components/cards';

enableValidation();

popup.addEventListener("submit", submitProfileForm);

editButton.addEventListener("click", function () {
  insertProfileData();
  openPopup(popup);
});

addButton.addEventListener("click", function () {
  openPopup(popupAdd);
  sumbitCardButton.disabled = true;
});

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup)
        }
    })
})


initialCards.forEach(prependCard);
