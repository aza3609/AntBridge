const project = document.querySelector(".main-project");
const backgroundImg = document.querySelector(".project__bg-image");
const backgroundImg01 = document.querySelector(".project__bg-image--01");
const backgroundImg02 = document.querySelector(".project__bg-image--02");
const backgroundImg03 = document.querySelector(".project__bg-image--03");
const backgroundImg04 = document.querySelector(".project__bg-image--04");
const projectItem = document.querySelector(".project__item");
const projectItem01 = document.querySelector(".project__item:nth-child(1)");
const projectItem02 = document.querySelector(".project__item:nth-child(2)");
const projectItem03 = document.querySelector(".project__item:nth-child(3)");
const projectItem04 = document.querySelector(".project__item:nth-child(4)");

function BackgroundColor() {
  project.backgroundColor = black;
}

function handleMouseOver01() {
  backgroundImg01.classList.remove("hidden");

  projectItem01.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
}
function handleMouseOut01() {
  backgroundImg01.classList.add("hidden");

  projectItem01.style.backgroundColor = "transparent";
}
function handleMouseOver02() {
  backgroundImg02.classList.remove("hidden");
  project.style.color = "white";
  projectItem02.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
}
function handleMouseOut02() {
  backgroundImg02.classList.add("hidden");

  projectItem02.style.backgroundColor = "transparent";
}
function handleMouseOver03() {
  backgroundImg03.classList.remove("hidden");

  projectItem03.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
}
function handleMouseOut03() {
  backgroundImg03.classList.add("hidden");

  projectItem03.style.backgroundColor = "transparent";
}
function handleMouseOver04() {
  backgroundImg04.classList.remove("hidden");

  projectItem04.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
}
function handleMouseOut04() {
  backgroundImg04.classList.add("hidden");

  projectItem04.style.backgroundColor = "transparent";
}

projectItem01.addEventListener("mouseover", handleMouseOver01);
projectItem02.addEventListener("mouseover", handleMouseOver02);
projectItem03.addEventListener("mouseover", handleMouseOver03);
projectItem04.addEventListener("mouseover", handleMouseOver04);
projectItem01.addEventListener("mouseout", handleMouseOut01);
projectItem02.addEventListener("mouseout", handleMouseOut02);
projectItem03.addEventListener("mouseout", handleMouseOut03);
projectItem04.addEventListener("mouseout", handleMouseOut04);
