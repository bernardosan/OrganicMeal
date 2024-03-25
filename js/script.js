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

mainNavLink.forEach(function (link) {
  link.addEventListener("click", function () {
    if (headerEl.classList.contains("nav-open")) {
      headerEl.classList.toggle("nav-open");
    }
  })
}
);


const sectionHeroEl = document.querySelector(".section-hero")

const obs = new IntersectionObserver(function(entries){
  const ent = entries[0]

  if(!ent.isIntersecting){
     document.body.classList.add("sticky")
  } 
  
  if(ent.isIntersecting) {
    document.body.classList.remove("sticky")
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
  offsetWidth: "20px"
})
// obs.observe(sectionHeroEl)
