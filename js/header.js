const header = document.querySelector("header");
const headerWhite = document.querySelector(".header--white");
const headerHeight = header.getBoundingClientRect().height;

function handleHeaderScroll() {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--white");
  } else {
    header.classList.remove("header--white");
  }
}

window.addEventListener("scroll", handleHeaderScroll);
