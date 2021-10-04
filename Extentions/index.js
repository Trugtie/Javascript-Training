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

const recipient = "James"
const sender = "Tien"

const email=`Hey ${recipient}!
How is it going?
Cheers ${sender}`

console.log(email)

let myLeads=[];
const button = document.querySelector("#input-btn");
const inputEl=document.querySelector("#input-el");
const ulEl=document.querySelector("#ul-el");


button.addEventListener("click",function (){
    myLeads.push(inputEl.value);
    inputEl.value="";
    renderLeads();
})

function renderLeads(){
    let listItems="";
    for (let i = 0 ; i < myLeads.length ; i++) {
        // listItems+="<li><a href='"+ myLeads[i] +"' target='_blank'>"+ myLeads[i] + "</a></li>"
        listItems += `
        <li>
            <a href="${myLeads[i]}" target="_blank">
             ${myLeads[i]}
            </a>
        </li>
        `
        // const li = document.createElement("li");
        // li.textContent=myLeads[i];
        // ulEl.append(li);
    }
    
    ulEl.innerHTML=listItems;
}








