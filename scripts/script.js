let elements = document.querySelector('.elements');
let elementLike = elements.querySelector('div.element__content button.element__like');
let popup = document.querySelector('div.popup');
let popupClose = popup.querySelector('button.popup__close')
let editButton = document.querySelector('section.profile div.profile__content div.profile__info button.profile__edit-button');



elementLike.addEventListener('click', function () {
  elementLike.classList.toggle('element__like_active');
});

editButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

popupClose.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});
