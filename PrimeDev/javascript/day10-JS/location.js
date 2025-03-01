const getData = (text) => {
    let pr = fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`, {
        headers: {
            "x-rapidapi-host": "google-map-places.p.rapidapi.com",
            "x-rapidapi-key": "a646fedb2bmsh124f98f50285851p154265jsn4f2d652783c3",
        }
    });
    pr.then((res) => {
        let pr2 = res.json();
        // console.log(pr2);
        pr2.then((data) => {
            // console.log(data.predictions)
            showLocations(data);
        })
    })
};


const root = document.getElementById("locations");

// root.addEventListener("click" , () => {
//     root.innerHTML = "";
// })

root.addEventListener("click", (e) => {
    root.innerHTML = "";
    getSpecificLocationInfo(e.target.id)
})

const showLocations = (data) => {
    root.innerHTML = "";
    const { predictions } = data;
    predictions.forEach((e) => {
        const p = document.createElement("p");
        p.id = e.place_id;
        p.innerHTML = e.description
        root.appendChild(p);
    })
}

const getSpecificLocationInfo = (placeId) => {
    const pr = fetch(
        `https://google-map-places.p.rapidapi.com/maps/api/place/details/json?place_id=${placeId}&region=en&fields=all&language=en&reviews_no_translations=true`, {
        headers: {
            "x-rapidapi-host": "google-map-places.p.rapidapi.com",
            "x-rapidapi-key": "a646fedb2bmsh124f98f50285851p154265jsn4f2d652783c3"
        },
    }
    );
    pr.then((res) => {
        const pr2 = res.json();
        pr2.then((data) => {
            const { result } = data;
            const rootNew = document.getElementById("location-info");
            rootNew.innerHTML = `
                <h2>${result.name}</h2>
                <h4>${result.formatted_address}</h4>
                <img src='${result.icon}'>
                <a href='${result.url}' target="_blank">Open Link</a>
                ${result.photos.map((photo) => {
                    return photo.html_attributions[0];
                })}
            `;
        })
    })
}

let timeoutId = null;

function handleSearch(event) {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
        getData(event.target.value);
    }, 500);
}