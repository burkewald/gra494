//Display of the Navigation on mobile//
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


function myFunction() {
var x = document.getElementById("extrainfo");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}}




    Array.from(document.querySelectorAll('.video-link-wrap'), function (elem) {
        elem.addEventListener('click', function hideContent(e) {
            e.currentTarget.nextElementSibling.classList.toggle('hidden');
        });
    });
    Array.from(document.querySelectorAll('.video-overlay .close'), function (elem) {
        elem.addEventListener('click', function hideContent(e) {
            e.currentTarget.parentElement.classList.toggle('hidden');
        });
    });
  
