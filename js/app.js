// const headerHeroOne = (document.querySelector(
//   " .header-hero .header-hero-one h1"
// ).innerHTML = "<h1>Obi is a boy</h1>");
// console.log(headerHeroOne)

// const headerHeroOne = (document.querySelector(
//   ".header-hero .header-hero-one h1"
// ).textContent = "obi is a boy");
// console.log(headerHeroOne);
const hamburger = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".img-hamburger");
const xIcon = document.querySelector(".x-icon");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
});
