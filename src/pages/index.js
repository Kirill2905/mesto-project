import "./index.css";
import {
  editProfilePopup,
  popups,
  editButton,
  popupAdd,
  addButton,
  sumbitCardButton,
  avatarEditButton,
  popupEditAvatar,
  sumbitAvatarButton,
} from "../components/constants";
import { enableValidation } from "../components/validate";
import {
  openPopup,
  closePopup,
  submitProfileForm,
  insertProfileData,
  submitAvatarForm,
} from "../components/modal";
import { prependCard } from "../components/cards";
import { loadingProfile } from "../components/utils";
import { getInitialCards } from "../components/api";

editProfilePopup.addEventListener("submit", submitProfileForm);

popupEditAvatar.addEventListener("submit", submitAvatarForm);

editButton.addEventListener("click", function () {
  insertProfileData();
  openPopup(editProfilePopup);
});

addButton.addEventListener("click", function () {
  openPopup(popupAdd);
  sumbitCardButton.disabled = true;
});

avatarEditButton.addEventListener("click", function () {
  openPopup(popupEditAvatar);
  sumbitAvatarButton.disabled = true;
});

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});

enableValidation({
  formSelector: ".form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__submit",
  inputErrorClass: "popup__input_error",
});

Promise.all([getInitialCards(), loadingProfile()])
  .then((data) => {
    data[0].forEach(prependCard)
    loadingProfile(data[1])
  })
  .catch((err) => {console.log(err);});
