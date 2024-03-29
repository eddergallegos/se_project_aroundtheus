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
const addNewCardEditForm = addNewCardModal.querySelector(".modal__form");

// Form data
const nameInput = profileEditModal.querySelector(".modal__input_type_name");
const jobInput = profileEditModal.querySelector(
  ".modal__input_type_description"
);
const cardTitleInput = addNewCardModal.querySelector("modal__input_type_title");
const cardUrlInput = addNewCardModal.querySelector(".modal__input_type_url");

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
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  return cardElement;
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopop(profileEditModal);
}

function handleAddNewCardSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardsWrap);
  e.target.reset();
  closePopop(addNewCardModal);
}

// Event Listeners
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addNewCardEditForm.addEventListener("submit", handleAddNewCardSubmit);

profileEditCloseButton.addEventListener("click", () =>
  closePopop(profileEditModal)
);
addNewCardCloseButton.addEventListener("click", () =>
  closePopop(addNewCardModal)
);

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopop(profileEditModal);
});
addNewCardButton.addEventListener("click", () => openPopop(addNewCardModal));

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));

const likeButtons = document.querySelectorAll(".card__like-button");
console.log(likeButtons);
