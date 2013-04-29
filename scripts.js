$(document).ready(function() {
  console.log('ready');

  //site picks random number on page load and stores it
  //in the variable "randomNum"
  function generateNum(min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var randomNum = generateNum(1, 10);

  console.log(randomNum);



});