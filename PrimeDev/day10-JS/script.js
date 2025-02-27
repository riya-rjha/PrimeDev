// https://dummyjson.com/recipes/search?q=Margherita

let timeoutID = null;

const handleSearch = (event) => {
    if(timeoutID) clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
        getData(event.target.value);
    }, 1000);
};


const getData = (text) => {
    const pr = fetch(`https://dummyjson.com/recipes/search?q=${text}`);
    pr.then((res) => {
        const pr2 = res.json();
        pr2.then((data) => {
            console.log(data)
            showCards(data.recipes);
        })
    })
};

getData("");

let cardContainer = document.getElementById("cards-container");

const showCards = (dataArr) => {
    cardContainer.innerHTML = ""
    dataArr.forEach((elem) => {
        const newDiv = document.createElement('div');
        newDiv.className = "card";
        newDiv.innerHTML = `
            <h4>${elem.name}</h4>
            <img src="${elem.image}">
            <p>${elem.cuisine}</p>
        `;
        cardContainer.append(newDiv)
    });
};


// Debouncing -> Ensures function is not called repetitively, like here in keyup or keydown
// For every letter we type the API is called, this increases redundancy
// Use onchange to avoid, OR use timeout, that means extract id for the input you give
// If timeout id already exists, clearTimeout

// Event Delegation: attaches a single event listener to a parent element instead of adding multiple event listeners to the paragraph tags