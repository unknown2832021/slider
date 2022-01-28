let slide = document.querySelectorAll(".image");
let slideArray = Array.from(slide);

function prevnext() {
  let currentSlide = document.querySelector(".active");
  let currentSlideIndex = slideArray.indexOf(currentSlide);

  let prev;
  let next;

  if (currentSlideIndex == 0) {
    prev = slideArray[slideArray.length - 1];
  } else {
    prev = slideArray[currentSlideIndex - 1];
  }

  if (currentSlideIndex == slideArray.length - 1) {
    next = slideArray[0];
  } else {
    next = slideArray[currentSlideIndex + 1];
  }
  //   console.log(prev, next);
  return { prev, next };
}
function sliding() {
  let currentSlide = document.querySelector(".active");
  let currentSlideIndex = slideArray.indexOf(currentSlide);
  let { prev, next } = prevnext();

  //   ===============Texting part start here==============
  let textTitle = document.querySelector(".textTitle");
  let activeImage = document.querySelector('.image.active')
  let textdes = document.querySelector('.textdes')
 
  if (slideArray.indexOf(currentSlide) == slideArray.indexOf(currentSlide)) {
    textTitle.innerHTML =
      "Image No - " + (slideArray.indexOf(currentSlide) + 1);
      textdes.innerHTML = activeImage.dataset.inn
  }
  //   ===============Texting part end here==============

  slideArray.map((image, index) => {
    if (currentSlideIndex == index) {
      image.style.transform = "translateX(0)";
    } else if (image == prev) {
      image.style.transform = "translateX(-100%)";
    } else if (image == next) {
      image.style.transform = "translateX(100%)";
    }
    image.addEventListener("transitionend", function () {
      image.classList.remove("smooth");
    });
  });
}

let prevbutton = document.querySelector(".prev");
let nextbutton = document.querySelector(".next");


prevbutton.addEventListener("click", function () {
  let currentSlide = document.querySelector(".active");
  let { prev } = prevnext();

  currentSlide.classList.add("smooth");
  prev.classList.add("smooth");
  currentSlide.classList.remove("active");
  currentSlide.style.transform = "translate(100%)";
  prev.classList.add("active");
  prev.style.transform = "translate(0)";
  sliding();
});

nextbutton.addEventListener("click", function () {
  let currentSlide = document.querySelector(".active");
  console.log("next",currentSlide)

  let { next } = prevnext();

  currentSlide.classList.add("smooth");
  next.classList.add("smooth");
  currentSlide.classList.remove("active");
  currentSlide.style.transform = "translateX(-100%)";
  next.classList.add("active");
  next.style.transform = "translateX(0)";
  sliding();
});

