const url = "https://nomoreparties.co/v1/plus-cohort-3/";

const config = {
  baseUrl: url,
  headers: {
    authorization: "a83fd22d-1ff5-4662-8071-e73f707ecd40",
    "Content-Type": "application/json",
  },
};

const checkResult = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}cards`, {
    headers: config.headers,
  }).then(checkResult);
};

export const getInitialUser = () => {
  return fetch(`${config.baseUrl}users/me`, {
    headers: config.headers,
  }).then(checkResult);
};

export const editProfile = (name, about) => {
  return fetch(`${config.baseUrl}users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(checkResult);
};

export const addNewCard = (newCards) => {
  return fetch(`${config.baseUrl}cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: newCards.name,
      link: newCards.link,
    }),
  }).then(checkResult);
};

export const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResult);
};

export const addLike = (cardId) => {
  return fetch(`${config.baseUrl}cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(checkResult);
};

export const deleteLike = (cardId) => {
  return fetch(`${config.baseUrl}cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResult);
};

export const editAvatar = (link) => {
  return fetch(`${config.baseUrl}users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: link,
    }),
  }).then(checkResult);
};
