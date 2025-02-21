console.dir(document.children);
console.dir(document.children[0]);
console.dir(document.children[0].children[1].children[0]);
document.children[0].children[1].children[0].style.color = "red";

const allDivs = document.querySelectorAll("div");
allDivs.forEach((e) => {
    e.style.backgroundColor = "green";
    e.style.padding = "15px";
});

console.dir(allDivs);

const allInnerDivs = document.querySelectorAll("div div");
allInnerDivs.forEach((e) => {
    e.style.backgroundColor = "yellow";
    e.style.margin = "20px";
});

const divChildren = Array.from(allDivs);

divChildren.forEach((e, i) => {
    e.style.border = i == 0 ? " " : "4px solid red";
});

const mappings = {
    Invitation: "You are invited for an event.",
    Reminder: "You have a reminder for a task.",
    Notice: "You have a notice from college.",
    Message: "You have 7 new messages."
};

const paragraphTags = document.querySelectorAll("p");
console.log(paragraphTags);

const topics = Object.keys(mappings);

paragraphTags.forEach((el, idx) => {
    el.innerHTML = mappings[topics[idx]];
});

// append
// appendChild
// remove
// removeChild
// prepend

const newDivElement = document.createElement("div");
const rootElement = document.querySelector("body");
// newDivElement.innerText = "Hi I am Tanisha the OG Coder";
rootElement.appendChild(newDivElement);

// Object.entries gives an array of keys and values for mappings
// And for each individual 2D array in mappings entries
// create a new element for the newDivElement and attach


// Tree Structure

/*
          body
       /   |   \
     h1    p   div(new) 
              /  |  |  \
            div1 .....  div4
*/


Object.entries(mappings).forEach((el) => {
    let key = el[0]
    let val = el[1];
    const newChildDev = document.createElement("div");
    newChildDev.style.color = "red";
    newChildDev.style.border = "3px solid green";
    newChildDev.style.margin = "20px";
    newChildDev.style.padding = "20px";
    newChildDev.innerHTML = `<h4>Key: ${key}</h4> <h4>Val: ${val}</h4>`;
    newDivElement.appendChild(newChildDev);
});