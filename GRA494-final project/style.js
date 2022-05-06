/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



window.onload = displayImage;
  var imagesArray = new Array("assets/BannerRP1.jpg","assets/BannerRP2.jpeg","assets/BannerRP3.jpeg","assets/BannerRP4.jpeg","assets/BannerRP5.jpeg","assets/BannerRP6.jpeg");


  function displayImage(){
      var randomNum = Math.floor(Math.random() * imagesArray.length);
document.getElementById("myPicture").style.backgroundImage = 'url('+imagesArray[randomNum]+')';
  }



  document.addEventListener('DOMContentLoaded', () => {
     const openBtn = document.querySelector('.video__thumb');
     const closeBtn = document.querySelector('.close');
     const overlay = document.querySelector('.video__overlay');

     openBtn.addEventListener('click', () => {
       overlay.style.display = 'block';
     });

     closeBtn.addEventListener('click', () => {
       overlay.style.display = 'none';
     });

   });

   document.addEventListener('DOMContentLoaded', () => {
  const openBtn2 = document.querySelector('.video__thumb2');
  const closeBtn2 = document.querySelector('.close2');
  const overlay2 = document.querySelector('.video__overlay2');

  openBtn2.addEventListener('click', () => {
    overlay2.style.display = 'block';
  });

  closeBtn2.addEventListener('click', () => {
    overlay2.style.display = 'none';
  });

});



document.addEventListener('DOMContentLoaded', () => {
  const openBtn3 = document.querySelector('.video__thumb3');
  const closeBtn3 = document.querySelector('.close3');
  const overlay3 = document.querySelector('.video__overlay3');

  openBtn3.addEventListener('click', () => {
    overlay3.style.display = 'block';
  });

  closeBtn3.addEventListener('click', () => {
    overlay3.style.display = 'none';
  });

});
document.addEventListener('DOMContentLoaded', () => {
  const submit = document.querySelector('#submit');
  const closeBtn4 = document.querySelector('.close4');
  const contactformoverlay = document.querySelector('.contactform-overlay');

  submit.addEventListener('click', () => {
    contactformoverlay.style.display = 'block';
  });

  closeBtn4.addEventListener('click', () => {
    contactformoverlay.style.display = 'none';
  });

});



/*
function displayText() {
  var text = document.getElementById("fname").innerHTML;

  var output = document.getElementById("first-name");
  output.innerHTML = text;
  alert(text)
 };
*/

function displayText(){
// Selecting the input element and get its value --- FIRST NAME
var text = document.getElementById("fullname").value;

// Displaying the value
var output = document.getElementById("first-name");
output.innerHTML = text;



// Selecting the input element and get its value --- LAST NAME
var text2 = document.getElementById("states").value;

// Displaying the value
var output2 = document.getElementById("last-name");
output2.innerHTML = text2;



// Selecting the input element and get its value --- MESSAGE
var text3 = document.getElementById("message").value;

// Displaying the value
var output3 = document.getElementById("message-content");
output3.innerHTML = text3;


}
