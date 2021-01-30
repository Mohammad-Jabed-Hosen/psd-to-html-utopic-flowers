var slides = [
  {
    slide: 1,
    img: "images/slide.jpeg"
  },
  {
    slide: 2,
    img: "images/slide01.jpeg"
  },
  {
    slide: 3,
    img: "images/slide02.jpeg"
  },
  {
    slide: 4,
    img: "images/slide03.jpeg"
  },
  {
    slide: 5,
    img: "images/slide04.jpeg"
  }
];

var img = document.getElementById("slide-images");
var bSlider = document.querySelector(".backSlider");
var fSlider = document.querySelector(".forwardSlider");

var currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
  showSlides();
});

function showSlides() {
  var item = slides[currentItem];
  img.src = item.img;
};

bSlider.addEventListener("click", function() {
  currentItem--;
  if(currentItem < slides.length - 5) {
    currentItem = 4;
  };
  showSlides();
});

fSlider.addEventListener("click", function() {
  currentItem++;
  if(currentItem > slides.length -1) {
    currentItem = 0;
  };
  showSlides();
});
