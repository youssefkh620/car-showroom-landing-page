const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuDiv = document.getElementById("menuDiv");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});
