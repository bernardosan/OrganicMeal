const flag = document.querySelector(".flag")
var fileName = location.href.split("/").slice(-1); 
console.log(fileName)

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
  rootMargin: "80px"
})
obs.observe(flag)
