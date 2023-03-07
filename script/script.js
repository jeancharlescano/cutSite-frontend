const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login_link");
const registerLink = document.querySelector(".register_link");
const btnLogin = document.querySelector(".btn_login");
const iconClose = document.querySelector(".icon_close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnLogin.addEventListener("click", () => {
  wrapper.classList.add("active_popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active_popup");
  setTimeout(() => {
    wrapper.classList.remove("active");
  }, 510);
});
