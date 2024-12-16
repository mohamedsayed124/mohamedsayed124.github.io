"use strict";

//Select Landing Page Element
var LandingPage = document.querySelector('.landing-page'); //Get Array Of Imgs

var imgsArray = ['01.jpg', '02.jpg', '03.jpg', '04.png', '05.png'];
setInterval(function () {
  //Get Random Number
  var randomNumber = Math.floor(Math.random() * imgsArray.length); //Change Backgroung Img Url

  LandingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
}, 10000);