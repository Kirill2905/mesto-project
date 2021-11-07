import {initialCards, cardContainer, placeInput, linkInput, popupAdd} from '../components/constants';
import {openPopup, closePopup} from '../components/modal';

const deleteCard = cardTemplate => {
  const DeleteButton = cardTemplate.querySelector(".element__delete");
  DeleteButton.addEventListener("click", function (evt) {
  evt.target.parentElement.remove();
  });
}

const cardAdd = element => {
  const cardTemplate = document
    .querySelector("#card")
    .content.firstElementChild.cloneNode(true);

  cardTemplate.querySelector(".element__place").textContent = element.name;
  cardTemplate.querySelector(".element__image").src = element.link;
  cardTemplate.querySelector(".element__image").alt = element.name;
  cardTemplate
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });

    const OpenImage = document.querySelector("#open_img");
    const elementImage = cardTemplate.querySelector(".element__image");
    elementImage.addEventListener("click", function (evt) {
      document.querySelector(".popup__place").src = evt.target.currentSrc;
      document.querySelector(".popup__place").alt = evt.target.alt;
      document.querySelector(".popup__text").textContent = evt.target.alt;
      openPopup(OpenImage);
    });

    deleteCard(cardTemplate);

  return cardTemplate;
}

export const card = element => {
  cardContainer.prepend(cardAdd(element));
}

function formSubmitAdd(evt) {
  evt.preventDefault();
  const newCards = {
    name: placeInput.value,
    link: linkInput.value,
  };
  initialCards.unshift(newCards);
  card(newCards);
  closePopup(popupAdd);
}

popupAdd.addEventListener("submit", formSubmitAdd);
