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

const profileEditForm = document.querySelector("#profile-edit-form");
const previewModal = document.querySelector("#preview-modal");
const modalPreviewImage = document.querySelector(".modal__preview-image");
const previewModalCloseButton = document.querySelector("#preview-button-close");
const modalPreviewTitle = document.querySelector(".modal__preview-heading");

// Buttons
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const addNewCardButton = document.querySelector(".profile__add-button");
const addNewCardCloseButton = addNewCardModal.querySelector(".modal__close");
const addNewCardForm = document.querySelector("#add-new-card-form");

// Form data
const nameInput = profileEditModal.querySelector("#profile-title-input");
const jobInput = profileEditModal.querySelector("#profile-description-input");
const cardTitleInput = addNewCardModal.querySelector("#new-card-title-input");
const cardUrlInput = addNewCardModal.querySelector("#new-card-url-input");
const closeButtons = document.querySelectorAll(".modal__close");

// Funtions
function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeWithEscape);
  modal.removeEventListener("mousedown", closePopupOverlay);
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeWithEscape);
  modal.addEventListener("mousedown", closePopupOverlay);
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".cards__image");
  const cardTitle = cardElement.querySelector(".cards__name");
  const cardLikeButton = cardElement.querySelector(".cards__like-button");
  const cardTrashButton = cardElement.querySelector(".cards__trash-button");

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("cards__like-button_active");
  });

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardImage.addEventListener("click", () => {
    modalPreviewImage.src = cardData.link;
    modalPreviewImage.alt = cardData.name;
    modalPreviewTitle.textContent = cardData.name;
    openPopup(previewModal);
  });

  cardTrashButton.addEventListener("click", () => {
    cardElement.remove();
  });

  return cardElement;
}

profileEditForm.addEventListener("submit", handleProfileEditFormSubmit);
addNewCardForm.addEventListener("submit", handleAddNewCardFormSubmit);

function handleProfileEditFormSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(profileEditModal);
}

function handleAddNewCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardsWrap);
  addNewCardForm.reset();
  closePopup(addNewCardModal);
}

function closeWithEscape(e) {
  if (e.key === "Escape") {
    const openPopup = document.querySelector(".modal_opened");
    if (openPopup) {
      closePopup(openPopup);
    }
  }
}

function closePopupOverlay(e) {
  if (e.target === e.currentTarget) {
    closePopup(e.currentTarget);
  }
}

// Event Listeners
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});
addNewCardButton.addEventListener("click", () => openPopup(addNewCardModal));

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closePopup(modal);
  });
});
