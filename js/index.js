const loginButton = document.querySelector(".login-button");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal .overlay");
const modalCloseIcon = document.querySelector(".modal-content .close");

const isModalVisible = () => !modal.classList.contains("hidden");

const escHandler = (e) => {
  if (isModalVisible() && e.code === "Escape") closeModal();
};

const openModal = () => {
  if (!isModalVisible()) modal.classList.remove("hidden");

  document.addEventListener("keydown", escHandler);
};

const closeModal = () => {
  if (isModalVisible()) modal.classList.add("hidden");

  document.removeEventListener("keydown", escHandler);
};

loginButton.addEventListener("click", openModal);
modalOverlay.addEventListener("click", closeModal);
modalCloseIcon.addEventListener("click", closeModal);

const correctLogin = "user@gmail.com";
const correctPass = "1111";
const loginForm = document.querySelector("#login-form");
const errorInForm = document.querySelector(".error");

const showError = () => {
  if (errorInForm.classList.contains("hidden")) {
    errorInForm.classList.remove("hidden");
  }
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  if (
    form.get("login") === correctLogin &&
    form.get("password") === correctPass
  ) {
    closeModal();
    document.body.innerHTML = `
        <h2 style="color:green;">Вхід успішний</h2>
    `;
  } else {
    showError();
  }
});
