// const basePrice=520;
// const discount=120;
// let shippingCost=12;
// let shippingTime="5-12 days"

// shippingCost=15
// shippingTime="7-14 days"

// const fullPrice=basePrice - discount + shippingCost

// console.log("Total cost: "+fullPrice+". It will arrive in "+ shippingTime)

let myLeads=[];
const button = document.querySelector("#input-btn");
const inputEl=document.querySelector("#input-el");

button.addEventListener("click",function (){
    myLeads.push(inputEl.value);
    console.log(myLeads);
})
