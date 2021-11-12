import {
  editProfilePopup,
  profileName,
  profilehobby,
  nameInput,
  jobInput,
  inputSaveAvatar,
  popupEditAvatar,
  profileAvatar,
  sumbitAvatarButton,
  sumbitProfileButton,
} from "../components/constants";
import { editProfile, editAvatar} from "../components/api";
import { savingText } from "../components/utils";

const closeEscape = (evt) => {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
};

const closeClick = (evt) => {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
};

export const openPopup = (popupElement) => {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", closeEscape);
  popupElement.addEventListener("click", closeClick);
};

export const closePopup = (popupElement) => {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEscape);
  popupElement.removeEventListener("click", closeClick);
};

export const insertProfileData = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profilehobby.textContent;
};

export const submitProfileForm = (evt) => {
  evt.preventDefault();
  savingText(true, sumbitProfileButton);
  editProfile(nameInput.value, jobInput.value)
    .then((res) => {
      profileName.textContent = res.name;
      profilehobby.textContent = res.about;
      closePopup(editProfilePopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => savingText(false, sumbitProfileButton))
};

export const submitAvatarForm = (evt) => {
  evt.preventDefault();
  savingText(true, sumbitAvatarButton);
  editAvatar(inputSaveAvatar.value)
    .then((res) => {
      profileAvatar.src = res.avatar;
      closePopup(popupEditAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => savingText(false, sumbitAvatarButton))
};
