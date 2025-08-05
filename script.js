const navlinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Open or toggle the mobile menu
menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

// Close the mobile menu by simulating a click on the open button
menuCloseButton.addEventListener("click", () => 
  menuOpenButton.click());

// Close the menu when navlink is clicked
navlinks.forEach(link => {
  link.addEventListener("click",()=>menuOpenButton.click())
})

//INitialize Swipper
const swiper = new Swiper('.slider-wrapper', {
   loop: true,
  spaceBetween: 25,
  grabCursor:true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //responsive breakpoints
breakpoints: {
  0:{
    slidesPerView: 1
  },
  768:{
    slidesPerView: 2
  },
  1024:{
    slidesPerView: 3
  }
}
});
