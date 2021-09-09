const formElement = document.querySelector("#edit_profile");
const profileName = document.querySelector(".profile__name");
const profilehobby = document.querySelector(".profile__hobby");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#hobby");
const popupAdd = document.querySelector("#add_card");
const popupClosed = popupAdd.querySelector(".popup__close");
const addButton = document.querySelector(".profile__add-button");
const popup = document.querySelector("#edit_profile");
const popupClose = popup.querySelector(".popup__close");
const editButton = document.querySelector(".profile__edit-button");
const formElementAddCard = document.querySelector("#add_card");
const placeInput = document.querySelector("#place");
const linkInput = document.querySelector("#link");

formElementAddCard.addEventListener("submit", AddformSubmit);

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
}

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


function submitFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profilehobby.textContent = jobInput.value;
  closePopup(popup);
}
formElement.addEventListener("submit", submitFormHandler);

function EnterNameInPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profilehobby.textContent;
}
EnterNameInPopup();

const initialCards = [
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

function AddCard(element) {
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

  const openImage = document.querySelector("#open_img");
  const elementImage = cardTemplate.querySelector(".element__image");
  elementImage.addEventListener("click", function (evt) {
    document.querySelector(".popup__place").src = evt.target.currentSrc;
    document.querySelector(".popup__place").alt = evt.target.alt;
    document.querySelector(".popup__text").textContent = evt.target.alt;
    openPopup(openImage);
  });

  openImage.addEventListener("click", function () {
    closePopup(openImage);
  });

  const deleteButton = cardTemplate.querySelector(".element__delete");
  deleteButton.addEventListener("click", function (evt) {
    evt.target.parentElement.remove();
  });
  return cardTemplate;
}
const cardContainer = document.querySelector(".elements");

function renderCard(element) {
  cardContainer.prepend(AddCard(element));
}

initialCards.forEach(renderCard);

function AddformSubmit(evt) {
  evt.preventDefault();
  const newCards = {
    name: placeInput.value,
    link: linkInput.value,
  };
  renderCard(newCards);
  closePopup(popupAdd);
}

