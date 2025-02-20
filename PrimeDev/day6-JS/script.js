const data = [
    {
        name: "John Doe",
        city: "New York",
        email: "john.doe@example.com"
    },
    {
        name: "Jane Smith",
        city: "Los Angeles",
        email: "jane.smith@example.com"
    },
    {
        name: "Alice Johnson",
        city: "Chicago",
        email: "alice.johnson@example.com"
    },
    {
        name: "Bob Brown",
        city: "Houston",
        email: "bob.brown@example.com"
    }
]

const root = document.getElementById("parent");

data.forEach((elem) => {
    const newCard = document.createElement("div");
    // setAttribute
    // classList.add
    newCard.addEventListener("click", (e) => {
        console.log("Card is clicked");
        newCard.style.background = getRandomColor();
    },);
    newCard.className = "card";
    newCard.innerHTML = `
        <h2>${elem.name}</h2>
        <h3>${elem.email}</h3>
        <p class="text">${elem.city}</p>
    `;
    newCard.style.cursor = "pointer";
    // newCard.classList.add("card");
    root.appendChild(newCard);
});

// Changing color of text added above

const textElement = document.querySelectorAll(".text");
console.log(textElement)

textElement.forEach((element) => {
    element.addEventListener("click", (event) => {
        console.log(event);
        console.log("Para clicked")
        element.style.backgroundColor = getRandomColor();
        event.stopPropagation(); // means after this events won't execute
    });  // 2nd params -> Checks for capturing phase and false means bubbling phase
});

const body = document.querySelector("body");

console.log(body);

let cnt = 0;

function handleBackgroundChange() {
    console.log("Background Clicked")
    body.style.backgroundColor = getRandomColor();
}

// Why are we able to run the function even after declaring the function with const and beneath:

// First GEC is made, then all variables are assigned memory. This is a part of TDZ - Temporal Dead Zone
// Then line by line synchronously, each variable is assigned with it's value
// data is assigned to the JSON and then furthermore the execution for data.forEach() continues
// HTML Tree is formed 
// Function assignment is done and it will be removed


// Browser takes the event and attaches it in callback queue
// Event Loop asks only 2 ques after every tick(time in seconds, milliseconds): Is there anything pending? Or is the call stack empty?
// Closures: Function can access it's parents and further ancestors variables


// Browser handles all eventListeners
// Initially, all functions are in TDZ.
// Because full HTML has been parsed, getRandomColor() can be written at the end and called first
// First HTML comes, then CSS + Script is called for execution
// By the time script starts, entire HTML should run


// In JavaScript, events are executed continuously
// Bubbling phase

// Input from 0 - 1 and output from 0 - 255
const getRandomColor = () => {
    let firstColor = Math.random() * 255;
    let secondColor = Math.random() * 255;
    let thirdColor = Math.random() * 255;
    return `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
}