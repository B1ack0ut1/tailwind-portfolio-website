const initApp = () => {
  const hamburger = document.querySelector("#hamburger");
  const menu = document.querySelector("#menu");
  const anchorLinks = document.querySelectorAll(".anchorLink");
  const moonBtn = document.querySelector("#moon");
  const body = document.querySelector("body");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
  });

  anchorLinks.forEach((anchorLink) => {
    anchorLink.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      hamburger.classList.toggle("bg-white");
    });
  });

  moonBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
  });
};

document.addEventListener("DOMContentLoaded", initApp);
