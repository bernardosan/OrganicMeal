const yearQuery = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearQuery.textContent = currentYear;


const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const mainNavLink = document.querySelector(".main-nav")


console.log(mainNavLink)
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  console.log("menu open/close");
});
