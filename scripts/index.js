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

console.log(initialCards);

const profileEditModal = document.querySelector("#profile-edit-modal");
const addNewCardModal = document.querySelector("#add-new-card-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const addNewCardButton = document.querySelector(".profile__add-button");
const addNewCardCloseButton = addNewCardButton.querySelector(".modal__close");

// Funtions
function closePopop(modal) {
  modal.classList.remove("modal_opened");
}

function openPopop(modal) {
  modal.classList.add("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".cards__image");
  const cardTitleEl = cardElement.querySelector(".cards__name");
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopop(profileEditModal);
}

function handleAddNewCardSubmit(e) {
  e.preventDefault();
  const name = newCardTitleInput.value;
  const link = newCardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  e.target.reset();
  closePopop(addNewCardModal);
}

// Event Listeners
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopop(profileEditModal);
});

profileEditCloseButton.addEventListener("click", () =>
  closePopop(profileEditModal)
);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

addNewCardButton.addEventListener("click", () => openPopop(addNewCardModal));

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);
});
