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
      document.querySelectorAll(".nav-item").forEach(nav => nav.classList.remove("main-nav-link-darkbg"));
      document.querySelectorAll(".main-nav").forEach(bg => bg.classList.remove("dark-background-transparent"));
      document.querySelectorAll(".icon-mobile-nav").forEach(btn=> btn.classList.remove("light-font-color"));
     }
  } 
  
  if(ent.isIntersecting) {
    document.body.classList.remove("sticky")

      // Logica para trocar a cor do texto da nav bar na pagina sobre
     if(fileName = "sobre.html"){
      document.querySelector(".logo").classList.add("light-font-color")
      document.querySelectorAll(".nav-item").forEach(nav => nav.classList.add("main-nav-link-darkbg"));
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