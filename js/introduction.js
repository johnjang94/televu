// =============== ANIMATING INTRODUCTION PICTURES ===============
// >>>>>>>>>>>>>>> PICTURE 1, 2, 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let glassVU = document.querySelector(".GlassVU");
let reportVU = document.querySelector(".ReportVU");
let video = document.querySelector(".Video");

let expanded1 = document.querySelector(".expanded1");
let expanded2 = document.querySelector(".expanded2");
let expanded3 = document.querySelector(".expanded3");

let closeBtn1 = document.querySelector(".close1");
let closeBtn2 = document.querySelector(".close2");
let closeBtn3 = document.querySelector(".close3");

glassVU.addEventListener("click", () => {
  expanded1.style.display = "block";
});

reportVU.addEventListener("click", () => {
  expanded2.style.display = "block";
});

video.addEventListener("click", () => {
  expanded3.style.display = "block";
});

closeBtn1.addEventListener("click", () => {
  expanded1.style.display = "none";
});

closeBtn2.addEventListener("click", () => {
  expanded2.style.display = "none";
});

closeBtn3.addEventListener("click", () => {
  expanded3.style.display = "none";
});

// >>>>>>>>>>>>>>> PICTURE 4, 5, 6 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let glassVU2 = document.querySelector(".GlassVU2");
let reportVU2 = document.querySelector(".ReportVU2");
let video2 = document.querySelector(".Video2");

let expanded4 = document.querySelector(".expanded4");
let expanded5 = document.querySelector(".expanded5");
let expanded6 = document.querySelector(".expanded6");

let closeBtn4 = document.querySelector(".close4");
let closeBtn5 = document.querySelector(".close5");
let closeBtn6 = document.querySelector(".close6");

glassVU2.addEventListener("click", () => {
  expanded4.style.display = "block";
});

reportVU2.addEventListener("click", () => {
  expanded5.style.display = "block";
});

video2.addEventListener("click", () => {
  expanded6.style.display = "block";
});

closeBtn4.addEventListener("click", () => {
  expanded4.style.display = "none";
});

closeBtn5.addEventListener("click", () => {
  expanded5.style.display = "none";
});

closeBtn6.addEventListener("click", () => {
  expanded6.style.display = "none";
});

// >>>>>>>>>>>>>>> PORTFOLIO MENU >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let images = document.querySelectorAll(".image");
let imageTags = document.querySelectorAll(".image-tag");

images.forEach((image) => {
  if (image.addEventListener("mouseover")) {
    imageTags.forEach((imageTag) => {
      imageTag.style.backgroundColor = "#9addfb";
    });
  } else if (image.removeEventListener("mouseover")) {
    imageTags.forEach((imageTag) => {
      imageTag.style.backgroundColor = "#FAFAFA";
    });
  }
});
