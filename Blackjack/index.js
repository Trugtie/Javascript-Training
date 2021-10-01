// if(sum<21){
//     console.log("Do you want to draw a new card?");
// }else if(sum===21){
//     console.log("Wohoo! You've got Blackjack!");
// }else{
//     console.log("You're out of the game!");
// }

// let age = 21;

// if (age < 21) {
//   console.log("You can nat enter the club!");
// } else {
//   console.log("Welcome!");
// }

// let age = 100;

// if (age < 100) {
//   console.log("Not elegible");
// } else if (age === 100) {
//   console.log("Here is your birthday card from the King!");
// } else {
//   console.log("Not elegible, you have already gotten one");
// }

// console.log(4===3) //false
// console.log(5>2) //true
// console.log(12>12) //false
// console.log(3<0) //false
// console.log(3>=3) //true
// console.log(11<=11) //true
// console.log(3<=2) //false


// let numbers = ["one","two","three"];

// console.log(numbers[0]);

// console.log(numbers[1]);

// console.log(numbers[2]);


// console.log(numbers.length);


let firstCard=10;
let secondCard=11;
let cards=[firstCard,secondCard];
let sum=firstCard+secondCard;
let hasBlackjack=false;
let isAlive=true;
let message="";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function renderGame(){
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    sumEl.textContent = "Sum: " + sum;
    if(sum<=20){
        message = "Do you want to draw a new card?";
    }else if(sum===21){
        message = "You've got Blackjack!"
        hasBlackjack=true;
    }else{
        message = "You're out of the game!"
        isAlive=false;
    }
    console.log(message);
    messageEl.textContent = message;
}

function newCard(){
    console.log("Drawing a new card from the deck!");
    let card=8;
    sum+=card;
    startGame();
}

function startGame(){
    renderGame();
}
