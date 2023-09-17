// Nav Bar Sticky JS
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// Nav Bar Sticky JS

// Swiper Slider
var swiper = new Swiper(".heroSlider", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable:true,
    },
    pagination: {
      el: ".swiper-pagination",
      type:"fraction",
      clickable: true,
    },
  });
// Swiper Slider

// Partner Slider JS
var copy = document.querySelector(".partner_items").cloneNode(true);
document.querySelector(".myPartners").appendChild(copy);
// Partner Slider JS
