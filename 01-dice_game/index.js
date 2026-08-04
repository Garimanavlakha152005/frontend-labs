//Dice Game

const player1Dice=document.querySelector('.img1');
const player2Dice=document.querySelector('.img2');
const winnerHeading=document.querySelector('.container h1')

const randomNumber1 = Math.floor(Math.random()*6)+1;
const randomNumber2 = Math.floor(Math.random()*6)+1;

console.log(`${randomNumber1} , ${randomNumber2}`);

function setImageDice(diceImage, number){
    //const ref=;
    diceImage.setAttribute('src',`images/dice${number}.png`);
}

setImageDice(player1Dice,randomNumber1);
setImageDice(player2Dice,randomNumber2);

if(randomNumber1>randomNumber2){
winnerHeading.innerHTML="Player 1 Wins !!";
}
else if (randomNumber1===randomNumber2){
    winnerHeading.innerHTML="It's a Draw !!";
}
else{
    winnerHeading.innerHTML="Player 2 Wins !!";
}