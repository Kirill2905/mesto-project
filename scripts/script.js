const formElement = document.querySelector("#edit_profile");
const profileName = document.querySelector(".profile__name");
const profilehobby = document.querySelector(".profile__hobby");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#hobby");

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profilehobby.textContent = jobInput.value;
  closePopup(popup);
}
formElement.addEventListener("submit", formSubmitHandler);

function nameInPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profilehobby.textContent;
}
nameInPopup();

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

function cardAdd(element) {
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


  OpenImage.addEventListener("click", function () {
    closePopup(OpenImage);

    const DeleteButton = cardTemplate.querySelector(".element__delete");
    DeleteButton.addEventListener("click", function (evt) {
    evt.target.parentElement.remove();

});
  });




  return cardTemplate;
}
const cardContainer = document.querySelector(".elements");

function card(element) {
  cardContainer.prepend(cardAdd(element));
}

initialCards.forEach(card);

const formElementAddCard = document.querySelector("#add_card");
const placeInput = document.querySelector("#place");
const linkInput = document.querySelector("#link");

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

formElementAddCard.addEventListener("submit", formSubmitAdd);

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
}

const popup = document.querySelector("#edit_profile");
const popupClose = popup.querySelector(".popup__close");
const editButton = document.querySelector(".profile__edit-button");

editButton.addEventListener("click", function () {
  openPopup(popup);
});

popupClose.addEventListener("click", function () {
  closePopup(popup);
});

const popupAdd = document.querySelector("#add_card");
const popupClosed = popupAdd.querySelector(".popup__close");
const addButton = document.querySelector(".profile__add-button");

addButton.addEventListener("click", function () {
  openPopup(popupAdd);
});

popupClosed.addEventListener("click", function () {
  closePopup(popupAdd);
});


// const DeleteButton = document.querySelectorAll(".element__delete");
// DeleteButton.forEach(function(Item) {
//   Item.addEventListener("click", function (evt) {
//     evt.target.parentElement.remove();
//   });
// });


// const OpenImage = document.querySelector("#open_img");
// const element = document.querySelectorAll(".element__image");

// element.forEach(function(Item) {
//   Item.addEventListener("click", function (evt) {
//     document.querySelector(".popup__place").src = evt.target.currentSrc;
//     document.querySelector(".popup__place").alt = evt.target.alt;
//     document.querySelector(".popup__text").textContent = evt.target.alt;
//     openPopup(OpenImage);
//   });
// });

// OpenImage.addEventListener("click", function () {
//   closePopup(OpenImage);
// });
