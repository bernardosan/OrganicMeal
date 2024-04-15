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

// mainNavLink.forEach(function (link) {
//   link.addEventListener("click", function () {
//     if (headerEl.classList.contains("nav-open")) {
//       headerEl.classList.toggle("nav-open");
//     }
//   });
// });

const flag = document.querySelector(".flag")
var fileName = location.href.split("/").slice(-1); 
console.log(fileName)

const obs = new IntersectionObserver(function(entries){
  const ent = entries[0]

  if(!ent.isIntersecting){
     document.body.classList.add("sticky")

     // Logica para trocar a cor do texto da nav bar na pagina sobre
     if(fileName = "sobre.html"){
      document.querySelector(".logo").classList.remove("light-font-color")
      document.querySelectorAll(".main-nav-item").forEach(nav => nav.classList.remove("main-nav-link-darkbg"));
      document.querySelectorAll(".main-nav").forEach(bg => bg.classList.remove("dark-background-transparent"));
      document.querySelectorAll(".icon-mobile-nav").forEach(btn=> btn.classList.remove("light-font-color"));
     }
  } 
  
  if(ent.isIntersecting) {
    document.body.classList.remove("sticky")

      // Logica para trocar a cor do texto da nav bar na pagina sobre
     if(fileName = "sobre.html"){
      document.querySelector(".logo").classList.add("light-font-color")
      document.querySelectorAll(".main-nav-item").forEach(nav => nav.classList.add("main-nav-link-darkbg"));
      document.querySelectorAll(".icon-mobile-nav").forEach(btn=> btn.classList.add("light-font-color"));
      document.querySelectorAll(".main-nav").forEach(bg => bg.classList.add("dark-background-transparent"));
     }
     
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: "80px"
})
obs.observe(flag)
