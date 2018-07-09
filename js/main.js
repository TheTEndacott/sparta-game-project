$(function() {

  console.log("Hello Jurassic World!");

  // Delayed start to show character
  // setTimeout(function(){
  //   showChar();
  // }, 5000);

  // Countdown Timer
  setTimeout(function() {
    var timeLeft = 30;
    var timerTime = setInterval(countdown, 1000);

    function countdown() {
      if (timeLeft == 0) {
        $(".time").html("TIME'S UP!")
      } else {
        $(".timeCounter").html(timeLeft);
        timeLeft--;
        console.log(timeLeft);
      }
    };
  }, 2000);



  // Random images to appear
  var imageArray = ["dino1"];

  function generateRandomImage() {
      var num = Math.floor(Math.random() * 1);
      return num;
  }

  function generateRandomLeft() {
      var num = Math.floor(Math.random() * 1250);
      return num;
  }

  function generateRandomTop() {
      var num = Math.floor(Math.random() * 640);
      return num;
  }

  function showChar() {
      var char = imageArray[generateRandomImage()];
      $(".random-image").append("<img src='images/" + char + ".png'>");
      var left = generateRandomLeft();
      var top = generateRandomTop();
      $(".random-image").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
      console.log("Raptor");

      setTimeout(function(){
        $(".random-image img:last-child").remove();
      }, 2000);
  }

  // Delay function for showChar
  setInterval(function(){
    showChar();
  }, 3000);















}); //Close for document load