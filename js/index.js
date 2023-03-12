const loginButton = document.querySelector(".login-button");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal .overlay");
const modalCloseIcon = document.querySelector(".modal-content .close");

const isModalVisible = () => !modal.classList.contains("hidden");
const openModal = () => {
  if (!isModalVisible()) modal.classList.remove("hidden");
};
const closeModal = () => {
  if (isModalVisible()) modal.classList.add("hidden");
};

loginButton.addEventListener("click", openModal);
modalOverlay.addEventListener("click", closeModal);
modalCloseIcon.addEventListener("click", closeModal);
