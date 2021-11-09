export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const popup = document.querySelector(".popup");
export const popups = document.querySelectorAll(".popup");
export const profileName = document.querySelector(".profile__name");
export const profilehobby = document.querySelector(".profile__hobby");
export const nameInput = document.querySelector("#name");
export const jobInput = document.querySelector("#hobby");
export const popupClose = popup.querySelector(".popup__close");
export const editButton = document.querySelector(".profile__edit-button");

export const popupAdd = document.querySelector("#add_card");
export const addButton = document.querySelector(".profile__add-button");
export const inputPlace = popupAdd.querySelector("#place");
export const inputLink = popupAdd.querySelector("#link");
export const sumbitCardButton = popupAdd.querySelector(".popup__submit");

export const cardContainer = document.querySelector(".elements");
export const placeInput = document.querySelector("#place");
export const linkInput = document.querySelector("#link");
