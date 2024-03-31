$(document).ready(function () {
  $(".center").slick({
    dots: true,
    arrows: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

const imageContainer = document.getElementById("location");
const text = document.getElementById("location-text");
const locationImage = document.getElementById("locationImage");
let previousInnerText = text.innerText;

imageContainer.addEventListener("mouseout", () => {
  locationImage.src = "../assets/mapindicate.png";
  text.innerText = previousInnerText;
  locationImage.classList = "w-6";
});
imageContainer.addEventListener("mouseover", () => {
  locationImage.src = "../assets/magnifier.png";
  locationImage.classList = "w-10";
  text.innerText = "bir sehir ara...";
});
