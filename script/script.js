function show(id_show, id_hide) {
  document.getElementById(id_hide).style.display = "none";

  setTimeout(function () {
    document.getElementById(id_hide).style.opacity = 0;
  }, 50);

  document.getElementById(id_show).style.display = "flex";

  setTimeout(function () {
    document.getElementById(id_show).style.opacity = 1;
  }, 50);
}

// Carousel Instagram

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
