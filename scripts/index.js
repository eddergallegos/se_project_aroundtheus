const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".cards__list-items");

const cardsWrap = document.querySelector(".cards__list");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addNewCardModal = document.querySelector("#add-new-card-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");

// Buttons
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const addNewCardButton = document.querySelector(".profile__add-button");
const addNewCardCloseButton = addNewCardModal.querySelector(".modal__close");
const addNewCardForm = addNewCardModal.querySelector(".modal__form");

// Form data
const nameInput = profileEditModal.querySelector("#profile-title-input");
const jobInput = profileEditModal.querySelector("#profile-description-input");
const cardTitleInput = addNewCardModal.querySelector("#new-card-title-input");
const cardUrlInput = addNewCardModal.querySelector("#new-card-url-input");

const closeButtons = document.querySelector("modal__close");

// Funtions
function closePopop(modal) {
  modal.classList.remove("modal_opened");
}

function openPopop(modal) {
  modal.classList.add("modal_opened");
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".cards__image");
  const cardTitle = cardElement.querySelector(".cards__name");
  const likeButton = cardElement.querySelector(".cards__like-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("cards__like-button_active");
  });

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  return cardElement;
}

profileEditForm.addEventListener("submit", handleProfileEditFormSubmit);
addNewCardForm.addEventListener("submit", handleAddNewCardFormSubmit);

function handleProfileEditFormSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopop(profileEditModal);
}

function handleAddNewCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const altName = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, altName, link }, cardsWrap);
  addNewCardForm.reset();
  closePopop(addNewCardModal);
}

// Event Listeners
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopop(profileEditModal);
});
addNewCardButton.addEventListener("click", () => openPopop(addNewCardModal));

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));

profileEditCloseButton.addEventListener("click", () => {
  closePopop(profileEditModal);
});
addNewCardCloseButton.addEventListener("click", () => {
  closePopop(addNewCardModal);
});
