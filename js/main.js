const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuDiv = document.getElementById("menuDiv");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

const navBg = document.getElementById("navBg");
const navList = document.getElementById("navList");

window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    navBg.classList.add("bg-white", "shadow-sm");
    navList.classList.remove("text-white");
    navList.classList.add("text-[#364153]");
  } else {
    navBg.classList.remove("bg-white", "shadow-sm");
    navList.classList.remove("text-[#364153]");
    navList.classList.add("text-white");
  }
});
