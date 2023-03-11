const loginButton = document.querySelector(".login-button");
const modal = document.querySelector(".modal");

loginButton.addEventListener("click", () => {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
  }
});
