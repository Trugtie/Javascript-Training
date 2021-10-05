// const basePrice=520;
// const discount=120;
// let shippingCost=12;
// let shippingTime="5-12 days"

// shippingCost=15
// shippingTime="7-14 days"

// const fullPrice=basePrice - discount + shippingCost

// console.log("Total cost: "+fullPrice+". It will arrive in "+ shippingTime)

// const body=document.querySelector("body");

// body.innerHTML="<button onclick='buy()'> Buy! </button>";

// function buy() {
//     body.innerHTML +="<p>Thanks you for buying!</p>"
// }

// const recipient = "James"
// const sender = "Tien"

// const email=`Hey ${recipient}!
// How is it going?
// Cheers ${sender}`

// console.log(email)

// localStorage.setItem("myName","Tien")
// console.log(localStorage.getItem("myName"))
// localStorage.clear()

//6 falsy values
//0
// ""
// null
// undefined
// false
// NaN

// console.log(Boolean("")) // false
// console.log(Boolean("0"))//true
// console.log(Boolean(100))//true
// console.log(Boolean(null))//false
// console.log(Boolean([0]))//true
// console.log(Boolean(-0))//false

// function greetUser(welcome,name,emoji){
//     console.log(`${welcome}, ${name} ${emoji}`)
// }

// greetUser("Hello","Peter",":D")
// greetUser("Hi","Clay","xD")
// greetUser("Welcome","Han","!")

// function add(number1,number2){
// return number1 + number2;
// }

// console.log(add(1,2));
// function getFirst(arr){
//     return arr[0];
// }

// console.log(getFirst([5,8,7,3]))

let myLeads=[];

// myLeads=JSON.parse(myLeads);
// myLeads.push("www.facebook.com");
// myLeads=JSON.stringify(myLeads);
// console.log(typeof myLeads);

const button = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function (tabs) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // listItems+="<li><a href='"+ myLeads[i] +"' target='_blank'>"+ myLeads[i] + "</a></li>"
    listItems += `
        <li>
            <a href="${leads[i]}" target="_blank">
             ${leads[i]}
            </a>
        </li>
        `;
    // const li = document.createElement("li");
    // li.textContent=myLeads[i];
    // ulEl.append(li);
  }

  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

button.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});


//practice
// let player="Per"
// let opponent="Nick"
// let game="AmazingFighter"
// const points=0
// const hasWon=false

// points+=100
// hasWon=true

// if(hasWon) {
//   console.log(player + " got " + points + " points and won the " + game + " game!")
// }else{
//   console.log("The winner is "+opponent+"! "+player+" lost the game")
// }
