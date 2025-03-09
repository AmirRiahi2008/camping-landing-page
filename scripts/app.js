const navButton = document.querySelector(".nav__toggle-btn");
const mobileNav = document.querySelector(".nav__wrapper_ul");
const destationsBTN = document.querySelector(".nav__wrapper__item")
navButton.addEventListener("click", (e) => {
  navButton.classList.toggle("nav__toggle_btn__open");
  mobileNav.classList.toggle("open__mobile__nav");
});

destationsBTN.addEventListener("click" , e=>{
  document.querySelector(".title__main").scrollIntoView({behavior:"smooth"})  
})












const button = document.createElement("button")
button.addEventListener("click" , console.log('clicked😊'),{once:true})

navigator.geolocation.getCurrentPosition()

navigator.getBattery().then(battery =>console.log(battery.level * 100))

navigator.clipboard.writeText("متن مورد نظر")


