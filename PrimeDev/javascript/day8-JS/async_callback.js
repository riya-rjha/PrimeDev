// console.log("Start");

// const handleInnerCall = () => {
//     console.log("Step Y");
// }

// let handleCall = () => {
//     console.log("Step M");
//     handleInnerCall()
//     console.log("Step N");
// }

// // handleCall();

// // Synchronous JS : When each function waits for the execution of previous function

// // document.querySelector("body").addEventListener("click", () => { // clickable area covered by content and not width or height of body 
// //     console.log("first")
// //     handleCall();
// // });

// // setTimeout(handleCall, 10000); // do not call function in setTimeout, calling work is of browser
// // setTimeout(handleCall, 0);

// console.log("End");

// console.log("-----------------")

// console.log("A")

// handleCall = () => {
//     console.log("H")
// }

// setTimeout(() => {
//     console.log("N");
//     setTimeout(() => {
//         console.log("P")
//     }, 0);
//     handleCall()
//     console.log("B")
// }, 5000)


// // A C N H B P
// console.log("C")

/*

Hyderabad: Take user credentials and authenticate -> HandleUser()
Noida: = Make payment by doing required checks
Bangalore -ToO handle these two teamsand implement wallet functionalities
.
*/

// Things calllacks say
// with

// Project is an object that represents asynchronous operation
// And it's resulting value

// Promises go to browser and 90% of the time, 
// we will be consuming promies and creating object.

// Promises

let dataArray;

const getData = () => {
    // const profile = e.target.value;
    const res = fetch("https://dummyjson.com/products");
    // console.log(res); // can check in Networks tab as to how the promise is working

    // fetch -> client server interaction
    // Network - How a promise started, when

    // console.groupEnd(res)
    res.then((a) => {
        // console.log("a: ", a)
        const res2 = a.json();
        res2.then((data) => {
            // console.log(data.products);
            showUI(data.products);
            dataArray = data.products;
        });
    }).catch((b) => {
        console.log("b:", b)
    });
};

function showUI(data) {
    const outerDiv = document.querySelector(".all-cards");
    outerDiv.innerHTML = "";
    data.forEach(element => {
        const card = document.createElement("card");
        card.innerHTML = `
        <p class="heading">${element.title}</p>
        <img class="image" src="${element.images[0]}"/>
        <p class="desc">${element.description}</p>
        <h3 class="price">${element.price}</h3>
    `;
        console.log()
        card.classList.add("card");
        outerDiv.appendChild(card);
    });

    // storeData(data); // Local Storage saving
};

function filterSearchValue(event) {
    let value = event.target.value;
    console.log(value)
    let filterArray = dataArray.filter((element) => element.title.toLowerCase().includes(value));
    showUI(filterArray)
};


function storeData(data) {
    localStorage.setItem("searches", JSON.stringify(data)); // key, value
    let oldData = localStorage.getItem("searches"); // returns a JSON String
    let dataArray = JSON.parse(oldData || "[]"); // if(oldData === undefined) arr = JSON.stringify("[]")
    dataArray.push(data);
    localStorage.setItem("searches", JSON.stringify(dataArray));
}

getData()

// Destructuring

// let obj = {
//     name: "Riya",
//     city: "Delhi",
//     country: null,
//     info: {
//         college: "ABES"
//     }
// }
// const { city, country = "India" } = obj;
// console.log(city, country);

// const { info } = obj;
// console.log(info.college);

// // city ="J"; // error -> assignment to constant variable

// obj.city = "Noida" // works as directly obj.city changed
// console.log(obj)

// // info = {college: "Not changed"}; // different addresses


// JavaScript Object & JavaScript Object Notation

// JS Object & JSON
// JSON.parse()
// JSON.stringify()

