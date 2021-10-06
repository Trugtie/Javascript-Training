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

// function rollDice(){
//     return Math.floor(Math.random()*6)+1;
// };

// console.log(rollDice());

// let hasSolvedChallenge = true;
// let hasHintsLeft = false;

// if (hasSolvedChallenge===false,hasHintsLeft===false){
//     showSolution();
// }

// let likesDocumentaries=true;
// let likesStartups=false;

// if(likesDocumentaries===true || likesStartups===true){
//     recommendMovie();
// }


// function recommendMovie(){
//     console.log("Hey, check out this new film we think you will like!");
// }

// function showSolution(){
//     console.log("Showing the solution....");
// }

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length:63,
//     level:2,
//     isFree:true,
//     tags: ["html","css"]
// }

// console.log(course.tags);
// console.log(course["tags"]);

// let castle = {
//     isNumber: true,
//     name: "De",
//     number: 2,
//     array: [1,2,3,4]
// }

// console.log(castle.name);
// console.log(castle.array)

//Practice 2
// let person = {
//     name:"Peter",
//     age:12,
//     country:"United States"
// }

// function logData(){
//     console.log(person.name+" is "+person.age+" years old and lives in "+person.country);
// }

// logData();

// let age=67;
// if(age < 6){
//     console.log("free")
// }
// else if( age >=6 && age <=17){
//     console.log("child discount")
// }
// else if(age >= 18 && age <=26){
//     console.log("student discount")
// }
// else if(age >=27 && age <=66){
// console.log("full price")
// }
// else
// {
//     console.log("senior citizen discount")
// }

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"];

// largeCountries.pop();
// largeCountries.push("Pakistan");
// largeCountries.shift();
// largeCountries.unshift("China");

// console.log("The 5 largst countries in the world: ");
// for(let i = 0 ; i < largeCountries.length; i++){
//     console.log("- " + largeCountries[i]);
// }

// let dayOfMonth=13;
// let weekday="Friday";

// if(dayOfMonth===13 && weekday==="Friday"){
//     console.log("Horror Day!");
// }

// let hands=["rock","paper","scissor"];

// function randomHands(){
//     return hands[Math.floor(Math.random()*3)];
// }

// console.log(randomHands());

let cards=[];
let sum=0;
let hasBlackjack=false;
let isAlive=false;
let message="";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let player={
    name:"De",
    chips:2000,
    sayHello: function(){
        console.log("Hewo :3")
    }
}


let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $" + player.chips;

function getRandomCard(){
    let randomCard=Math.floor(Math.random()*13)+1;
    if(randomCard === 1) return 11;
    else if (randomCard >=11 && randomCard <=13) return 10;
    else return randomCard;
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length ; i++){
        cardsEl.textContent+=cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum<=20){
        message = "Do you want to draw a new card?";
    }else if(sum===21 && cards.length<3){
        message = "You've got Blackjack!"
        hasBlackjack=true;
    }
    else if(sum===21){
        message="You've got 21 point!"
    }
    else{
        message = "You're out of the game!"
        isAlive=false;
    }
    console.log(message);
    messageEl.textContent = message;
}

function newCard(){
    console.log("Drawing a new card from the deck!");
    if(isAlive===true&&hasBlackjack===false && sum <21){
        let card=getRandomCard();
        sum+=card;
        cards.push(card);
        renderGame();
    }
}

function startGame(){
    isAlive=true;
    hasBlackjack=false;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();
}

