import {
  cardContainer,
  placeInput,
  linkInput,
  popupAdd,
  inputPlace,
  inputLink,
  sumbitCardButton,
  openImage,
  userId,
} from "../components/constants";
import { openPopup, closePopup } from "../components/modal";
import { addNewCard, deleteCard, addLike, deleteLike } from "../components/api";
import { savingText } from "../components/utils";

const setDeleteListener = (cardTemplate, element) => {
  const deleteButton = cardTemplate.querySelector(".element__delete");
  if (userId === element.owner._id) {
    deleteButton.addEventListener("click", function (evt) {
      deleteCard(element._id)
      .then(res => evt.target.parentElement.remove())
      .catch((err) => {console.log(err)});
    });
  } else {
    deleteButton.remove();
  }
};

const addCard = (element) => {
  const cardTemplate = document
    .querySelector("#card")
    .content.firstElementChild.cloneNode(true);
  const elementImage = cardTemplate.querySelector(".element__image");
  const popupPlace = document.querySelector(".popup__place");
  const countLikes = cardTemplate.querySelector(".element__likes_count");
  const like = cardTemplate.querySelector(".element__like");
  const id = element._id;

  cardTemplate.querySelector(".element__place").textContent = element.name;
  countLikes.textContent = element.likes.length;
  elementImage.src = element.link;
  elementImage.alt = element.name;
  if (element.likes.some((like) => like._id === userId)) {
    like.classList.add("element__like_active");
  }
  cardTemplate
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      if (evt.target.classList.contains("element__like_active")) {
        deleteLike(id)
          .then((res) => {
            like.classList.remove("element__like_active");
            countLikes.textContent = res.likes.length;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        addLike(id)
          .then((res) => {
            like.classList.add("element__like_active");
            countLikes.textContent = res.likes.length;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });

  elementImage.addEventListener("click", function (evt) {
    popupPlace.src = evt.target.currentSrc;
    popupPlace.alt = evt.target.alt;
    document.querySelector(".popup__text").textContent = evt.target.alt;
    openPopup(openImage);
  });

  setDeleteListener(cardTemplate, element);

  return cardTemplate;
};

export const prependCard = (element) => {
  cardContainer.prepend(addCard(element));
};

function submitAddForm(evt) {
  evt.preventDefault();
  savingText(true, sumbitCardButton);
  const newCards = {
    name: placeInput.value,
    link: linkInput.value,
  };
  addNewCard(newCards)
    .then((res) => {
      prependCard(res);
      inputPlace.value = "";
      inputLink.value = "";
      closePopup(popupAdd);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => savingText(false, sumbitCardButton))
}

popupAdd.addEventListener("submit", submitAddForm);
