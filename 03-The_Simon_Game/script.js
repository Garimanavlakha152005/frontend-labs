let levelTitle=document.querySelector("#level-title");

//Blocks
let redBlock=document.querySelector("#red");
let greenBlock=document.querySelector("#green");
let yellowBlock=document.querySelector("#yellow");
let blueBlock=document.querySelector("#blue");


//Start the Game
let isGameStarted=false;
let userResponse=false;
let endUserGame=false;

window.addEventListener("keydown",()=>{
    
    if(!isGameStarted){
        
        levelTitle.innerHTML="Level 1";
        isGameStarted=true;
        
        while(endUserGame!=true){
            generateSequence();
            userFollowSequence();
            
        }
    }
    
})

let originalSeq=[];

//flash colors
function flashButton(color) {
    
    const button = document.querySelector("." + color);

    button.classList.add("flash");

    setTimeout(function () {
        button.classList.remove("flash");
    }, 100);
}


//choose color
function generateSequence(){
let randomColor=Math.floor(Math.random()*4)+1;

//green ==0, red==1 ,blue==2, yellow==3
switch(randomColor){
case 1:
    originalSeq.push("green");
    flashButton("green");
    break;

case 2:
    originalSeq.push("red");
    flashButton("red");
    break;

case 3:
    originalSeq.push("blue");
    flashButton("blue");
    break;

case 4:
    originalSeq.push("yellow");
    flashButton("yellow");
    break;
}

userResponse=true;
}

//user presses block


redBlock.addEventListener("click",(event)=>{

    if(event.target==key){

        flashButton("red");
    }
    else{
        endGame();
    }

})

greenBlock.addEventListener("click",(event)=>{
    if(event.target==key){

        flashButton("green");
    }
    else{
        endGame();
    }
})

yellowBlock.add("click",(event)=>{
    if(event.target==key){
        
        flashButton("yellow");
    }
    else{
        endGame();
    }
})

blueBlock.addEventListener("click",()=>{

    if(event.target==key){
        
        flashButton("blue");
    }
    else{
        endGame();
    }
})

function userFollowSequence(){
    
    for(let i=0;i<originalSeq.length;i++){

        let key=originalSeq[i];

    }
}

function endGame(){
  const endButton = document.querySelector("." + color);

    endButton.classList.add("game-over");
    levelTitle.innerHTML="Game Over, Press any key to restart !!";

    setTimeout(function () {
        endButton.classList.remove("game-over");
    }, 100); 
    endUserGame=true;  
}


