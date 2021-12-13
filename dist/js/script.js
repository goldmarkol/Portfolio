const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  close = document.querySelector(".menu__close");ç

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});
