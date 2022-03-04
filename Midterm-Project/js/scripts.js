function myFunction() {
var x = document.getElementById("myLinks");
var y = document.getElementById("bars");
if (x.style.display === "block") {
  x.style.display = "none";
  y.classList.remove("active");
} else {
  x.style.display = "block";
  y.classList.add("active");
}}
