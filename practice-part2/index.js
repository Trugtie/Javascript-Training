// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container= document.querySelector("#container")

function render(array){
let data="";
for (let i=0; i<array.length; i++){
    data+=`
    <img alt="Employee in the company" class="team-img" src="${array[i]}">
    `
}

container.innerHTML=data;
}

render(imgs)
