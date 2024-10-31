
document.getElementById("openup").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".nav_links").classList.toggle("active");
});

document.getElementById("menu-bar").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".nav_links").classList.add("active");
});

document.getElementById("close-menu").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".nav_links").classList.remove("active");
});