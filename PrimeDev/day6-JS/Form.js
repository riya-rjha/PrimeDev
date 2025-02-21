
const data = [
    {
        email: "rd1@example.com",
        name: "Rakesh",
        city: "Delhi"
    },
    {
        email: "sm2@example.com",
        name: "Sonia",
        city: "Mumbai"
    },
    {
        email: "ab3@example.com",
        name: "Amit",
        city: "Bangalore"
    },
    {
        email: "sc4@example.com",
        name: "Sakshi",
        city: "Chennai"
    },
];

const handleFormSubmit = (event) => {
    event.preventDefault() // prevents the default behaviour of the form
    // console.log(event.target)
    // console.log(event.target.email.value);
    // console.log(event.target[0].value);
    // console.log(event.target.name.value);
    // console.log(event.target[1].value)

    const isEmailExists = data.some((el) => {
        return el.email === event.target.email.value;
    });

    if (isEmailExists) {
        alert("Email already exists");
        return;
    }

    let newElement = {
        email: event.target.email.value,
        name: event.target.name.value,
        city: event.target.city.value,
    };

    data.push(newElement);

    showCards(data);
};


const cities = data.map((el) => el.city);

const selectTag = document.getElementById("select-options");

const showOptions = () => {
    selectTag.innerHTML = "";

    const citiesMap = {};
    data.forEach((e) => { citiesMap[e.city] = true });
    // console.log(citiesMap);
    const citiesObj = Object.keys(citiesMap);
    // console.log(citiesObj)

    citiesObj.forEach((city) => {
        const newOption = document.createElement("option");
        newOption.value = city;
        newOption.innerText = city;
        selectTag.appendChild(newOption)
    });
};


const root = document.getElementById("root");

const showCards = (newData) => {
    showOptions();
    root.innerHTML = "";
    newData.forEach((el) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <div>${el.name}</div>
            <p>${el.city}</p>
            <p>${el.email}</p>
            <button onClick="deleteCard(event, '${el.email}')">Delete</button>
        `;
        card.classList.add("card");
        root.appendChild(card);
    });
};


const deleteCard = (event, elemEmail) => {
    console.log("Deleted");
    console.log(event);
    console.log(data);

    const index = data.findIndex((el) => el.email === elemEmail);
    data.splice(index, 1);
    showCards(data);
}

const handleSelect = (e) => {
    const selectedCity = e.target.value;
    console.log(selectedCity);
    const newData = data.filter((curr) => curr.city == selectedCity);
    // console.log(newData);
    showCards(newData)
    console.log(data)
};

showCards(data);