const getData = () => {
    const pr = fetch("http://youtube138.p.rapidapi.com/v2/trending", {
        method: "GET", // optional
        headers: {
            "x-rapidapi-host": "youtube138.p.rapidapi.com",
            "x-rapidapi-key": "a646fedb2bmsh124f98f50285851p154265jsn4f2d652783c3",
        },
    });
    pr.then((res) => {
        const pr2 = res.json();
        pr2.then((data) => {
            console.log(data)
        }).catcH((er) => {
            console.log(err.message)
        })
    })
};

getData();

const dummyData = [
    {
        title: "Video 1",
        videoId: "dQw4w9WgXcQ",
        author: "Rick Astley",
        videoURL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        likes: 100,
        videoThumbnails: [
            { url: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" }
        ]
    },
    {
        title: "Video 2",
        videoId: "3JZ_D3ELwOQ",
        author: "Author 2",
        videoURL: "http://example.com/video2",
        likes: 200,
        videoThumbnails: [
            { url: "https://img.youtube.com/vi/3JZ_D3ELwOQ/0.jpg" }
        ]
    },
    {
        title: "Video 3",
        videoId: "9bZkp7q19f0",
        author: "PSY",
        videoURL: "https://www.youtube.com/watch?v=9bZkp7q19f0",
        likes: 300,
        videoThumbnails: [
            { url: "https://img.youtube.com/vi/9bZkp7q19f0/0.jpg" }
        ]
    },
    {
        title: "Video 4",
        videoId: "e-ORhEE9VVg",
        author: "Taylor Swift",
        videoURL: "https://www.youtube.com/watch?v=e-ORhEE9VVg",
        likes: 400,
        videoThumbnails: [
            { url: "https://img.youtube.com/vi/e-ORhEE9VVg/0.jpg" }
        ]
    },
    {
        title: "Video 5",
        videoId: "hT_nvWreIhg",
        author: "Adele",
        videoURL: "https://www.youtube.com/watch?v=hT_nvWreIhg",
        likes: 500,
        videoThumbnails: [
            { url: "https://img.youtube.com/vi/hT_nvWreIhg/0.jpg" }
        ]
    }
];


const root = document.querySelector("main");


const showUI = (list) => {
    list.forEach((obj, idx) => {
        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.innerHTML = `
            <img src = '${obj.videoThumbnails[0].url}' width = "100%" onmouseover='handleHover(event, ${idx}')>
            <h6>${obj.title}</h6>
            <h4>${obj.author}</h4>
        `;
        newCard.addEventListener("click", () => {
            window.open(`./video.html?id=${obj.videoId}`, "_top")
        });
        root.appendChild(newCard);
    });
};

const handleHover = (e, idx) => {
    // .....
    // e.target.setAttribute
    const lastImage = dummyData[idx].videoThumbnails.pop();
    e.target.src = lastImage.url;

}

showUI(dummyData)

const handleSearch = (w) => {
    window.open(`./search.html?text=${e.target.value}`);
};