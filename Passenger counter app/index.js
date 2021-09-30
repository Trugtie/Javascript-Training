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


// let username="per";
// let message = "You have tree new notifications";
// console.log(message + ", " + username + "!");

// let messageToUser="We have logged";
// console.log(messageToUser+", " + username + "!");

// let name= "Tien";
// let greeting= "Hi, my name is ";
// let myGreeting= greeting + name;

// console.log(myGreeting);

// console.log(4+5);//9
// console.log("2"+"4");//24
// console.log("5"+1);//51
// console.log(100+"100");//100100

// let welcomeEl = document.getElementById("welcome-el");
// let name = "Tien";
// let greeting = "Welcome back ";
// welcomeEl.innerText = greeting + name;

// welcomeEl.innerText +=":D!"

let saveEl = document.getElementById("save-el");
let countel=document.getElementById('count-el');
let count=0;

function increment(){
    count+=1;
    console.log(count);
    countel.textContent=count;
}

function save(){
    let saveText = count + " - ";

    saveEl.textContent+=saveText;
    console.log(count);
    count=0;
    countel.textContent=count;
}

//Recap

// let firstName="Trugtie";
// let lastName="Nham";
// let fullName=lastName + " " + firstName;
// console.log(fullName);

// let name="Linda";
// let greeting="Hi there";

// function hi(){
//     console.log(greeting+", "+name+"!");
// }

// hi();

// let myPoints = 3;

// function add3Points(){
//     myPoints+=3;
// }

// function remove1Points(){
//     myPoints-=1;
// }

// add3Points();
// add3Points();
// add3Points();
// remove1Points();
// remove1Points();

// console.log(myPoints);

// console.log("2" + 2);//22
// console.log(11 + 7);//18
// console.log(6 + "5");//65
// console.log("My points: " + 5 + 9);//My points: 59
// console.log(2 + 2);// 4 
// console.log("11" + "14");// 1114