const data = [
    {
        id: "rd1",
        name: "Rakesh",
        city: "Delhi"
    },
    {
        id: "sm2",
        name: "Sonia",
        city: "Mumbai"
    },
    {
        id: "ab3",
        name: "Amit",
        city: "Bangalore"
    },
    {
        id: "sc4",
        name: "Sakshi",
        city: "Chennai"
    },

];

const root = document.getElementById("root");

const showCards = (newData) => {
    root.innerHTML = "";
    newData.forEach((el, idx) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <div>${el.name}</div>
            <p>${el.city}</p>
            <button onClick="deleteCard(event, '${el.id}')">Delete</button>
        `;
        // card.innerHTML = `
        //     <div>${el.name}</div>
        //     <p>${el.city}</p>
        //     <button onClick="deleteCard(event, ${idx})">Delete</button>
        // `;
        card.classList.add("card");
        root.appendChild(card);
    });
};

// When outside double inverted commas -> Inside single inverted comma and vice-versa

showCards(data);

const deleteCard = (event, elemId) => {
    console.log("Deleted");
    console.log(event)
    // event.target.remove();
    // Due to remove, when you delete the element button in the console it shows it has no parent
    // when you remove the remove statement, then the parent element is shown as till then it is not deleted
    // event.target.parentElement.remove(); // -> It is deleting only from DOM and not from data

    // console.log("Idx: " + idx)
    // data.splice(idx, 1); // BUG BUG BUG
    // Because every time when you delete an element by going in option
    // such as Noida, then the first element is deleted from array 
    // which means Noida won't be deleted but Delhi which is the first element will be deleted

    console.log(data);

    // showCards(data)

    const index = data.findIndex((el) => el.id === elemId); // findIndex -> returns the index of the element where the current element id matches the selected id
    data.splice(index, 1); // splice the array by removing the element from that index and delete count is 1
    showCards(data);
}

// For Bubbling, you need to add eventListeners to both parent and child
// When parent has the event listener, and then the child also has eventListener only then bubbling is executed where click on the button also deletes the parent
// But BUG: Clicking on parent also gets deleted

// event & target difference

// When I am deleting even after that I am filtering and 

const handleSelect = (e) => {
    const selectedCity = e.target.value;
    console.log(selectedCity);
    const newData = data.filter((curr) => curr.city == selectedCity);
    // console.log(newData);
    showCards(newData)
    console.log(data)
};