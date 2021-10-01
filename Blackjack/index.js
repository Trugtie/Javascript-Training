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


// let myInfo = ["Tien",12,true];
// console.log(myInfo)

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// for (let i=0;i<messages.length;i+=1){
//     console.log(messages[i]);
// }

// let newMessage = "Same here!"

// messages.push(newMessage);
// console.log(messages);

// messages.pop();
// console.log(messages);

// for (let i=10;i<=100;i+=10){
//     console.log(i);
// }

// let cardss=[7,3,9];

// for (let i=0;i<cardss.length;i+=1){
//     console.log(cardss[i]);
// }

// let sentence = ["Hello","my","name","is","Per"]
// let greetingEl=document.querySelector("#greeting-el");

// for (let i = 0 ; i<sentence.length; i++){
//     greetingEl.textContent += sentence[i]+" ";
// }

// let player1Time=102;
// let player2Time=107;
// function totalRaceTime(){
//     return player1Time+player2Time;
// };
// let total=totalRaceTime();
// console.log(total);

// let randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber);

// let flooredNumber=Math.floor(4.0632);
// console.log(flooredNumber);

let firstCard=getRandomCard();
let secondCard=getRandomCard();
let cards=[firstCard,secondCard];
let sum=firstCard+secondCard;
let hasBlackjack=false;
let isAlive=true;
let message="";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard(){
    return 5;
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length ; i++){
        cardsEl.textContent+=cards[i] + " ";
    }
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
    let card=getRandomCard();
    sum+=card;
    cards.push(card);
    renderGame();
}

function startGame(){
    renderGame();
}

