$(document).ready(function() {

  //site picks random number btwn 1 and 10 on page load
  //and stores it in the variable "randomNum"
  function generateNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var randomNum = generateNum(1, 10);

  console.log(randomNum);


  //this validates the form and checks for a match
  $('form').submit(function() {
    var userNum = $('#guessinput').val();

    $('.result p').hide();

    if (userNum == randomNum) {
      $('#match').toggle();
      $('form').hide();
      console.log('match');
    } else if (isNaN(userNum)) {
      $('#nan').toggle();
      console.log('not a number');
    } else if (userNum > 10 | userNum == 0) {
      $('#range').toggle();
      console.log('out of range');
    } else if (userNum < randomNum) {
      $('#low').toggle();
      console.log('too low');
    } else {
      $('#high').toggle();
      console.log('too high');
    };

    console.log(userNum);

    //this clears the input on submit
    $('#guessinput').val('');

    return false;

  });
});