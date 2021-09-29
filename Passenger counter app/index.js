// document.getElementById("count-el").innerHTML = 5;

// let myAge = 0;
// console.log(myAge);

// let myAge=21, humanDogRatio=7;

// let myDogAge= myAge*humanDogRatio;

// console.log(myDogAge);

// let bonusPoints= 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints / 2 - 25;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// function increment(){
//     console.log("The button was clicked");
// }

// function countdown(){
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }

// countdown();

// function logsOut(){
//     console.log(42);
// }

// logsOut();

// let lap1= 34, lap2= 33, lap3= 36;

// function sumLap(){
//     console.log(lap1+lap2+lap3);
// }

// sumLap();

// let lapsCompleted= 0;
// function lapsIncrements(){
//     lapsCompleted=lapsCompleted+1;
// }
// lapsIncrements();
// lapsIncrements();
// lapsIncrements();
// console.log(lapsCompleted);
let countel=document.getElementById('count-el');
let count=0;

function increment(){
    count=count+1;
    console.log(count);
    countel.innerText=count;
}

function save(){
    console.log(count);
}

