import {cardContainer, placeInput, linkInput, popupAdd, inputPlace, inputLink} from '../components/constants';
import {openPopup, closePopup} from '../components/modal';

const setDeleteListener = cardTemplate => {
  const deleteButton = cardTemplate.querySelector(".element__delete");
  deleteButton.addEventListener("click", function (evt) {
  evt.target.parentElement.remove();
  });
}

const addCard = element => {
  const cardTemplate = document
    .querySelector("#card")
    .content.firstElementChild.cloneNode(true);
  const openImage = document.querySelector("#open_img");
  const elementImage = cardTemplate.querySelector(".element__image");
  const popupPlace = document.querySelector(".popup__place");

  cardTemplate.querySelector(".element__place").textContent = element.name;
  elementImage.src = element.link;
  elementImage.alt = element.name;
  cardTemplate
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });

    elementImage.addEventListener("click", function (evt) {
      popupPlace.src = evt.target.currentSrc;
      popupPlace.alt = evt.target.alt;
      document.querySelector(".popup__text").textContent = evt.target.alt;
      openPopup(openImage);
    });

    setDeleteListener(cardTemplate);

  return cardTemplate;
}

export const prependCard = element => {
  cardContainer.prepend(addCard(element));
}

function submitAddForm(evt) {
  evt.preventDefault();
  const newCards = {
    name: placeInput.value,
    link: linkInput.value,
  };
  prependCard(newCards);
  closePopup(popupAdd);
  inputPlace.value = '';
  inputLink.value = '';
}

popupAdd.addEventListener("submit", submitAddForm);
