
var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];
var started = false;
var level = 0 ;


$(".btn").click(function(){
  var userChosenColour = $(this).attr("id")
    
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
  
  
})

function playSound(name){
  
  switch(name){
    case "blue" :
    var blue = new Audio('blue.mp3')
    blue.play();
    break ;

    case "green" :
      var green = new Audio('green.mp3')
      green.play();
      break;

      case "red" :
        var red = new Audio('red.mp3')
        red.play();
        break ;

        case "yellow" :
          var yellow = new Audio('yellow.mp3')
          yellow.play();
          break ;

  }
}


$(document).keypress(function(){
  if (!started){
     $("#level-title").text("level "+ level);
     nextSquence();
     started = true;

  }
 }
)



function nextSquence(){


userClickedPattern =[];

  level++;
   
  var randomNumberGenerater = Math.random();
    randomNumberGenerater = randomNumberGenerater*4;
 var randomNumber = Math.floor(randomNumberGenerater);

 var randomChosenColour = buttonColours[randomNumber];

 gamePattern.push(randomChosenColour);

 $("#level-title").text("level "+ level);


  $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

}

function  animatePress(currentColour){
  $("#"+ currentColour).addClass("pressed")

  setTimeout(function(){
   
  $("#"+currentColour).removeClass("pressed")},100)

}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
     
        if(userClickedPattern.length === gamePattern.length){

setTimeout(function(){

nextSquence();

},1000);

        }


    }

    else{
      $("h1").text("Game Over, Press Any Key to Restart")
      var wrongaudio = new Audio("wrong.mp3")
      wrongaudio.play();

      $("body").addClass("game-over");

      setTimeout(function(){
    
     $("body").removeClass("game-over");
    
      },200)
    

      startOver();

    }
  
}


function startOver(){

  gamePattern = [];
 started = false;
 level = 0 ;


}





