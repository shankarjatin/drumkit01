var numberOfButton = document.querySelectorAll(".drum").length ;


for(var i=0; i<numberOfButton;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener( "click", function(){
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    })
    }

