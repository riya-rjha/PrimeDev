let dataArray = [];

const getData = async () => {
    const res = await fetch('https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50', {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
            'x-rapidapi-key': 'a646fedb2bmsh124f98f50285851p154265jsn4f2d652783c3'
        },
    });
    try {
        dataArray = await res.json();
        localStorage.setItem("yt_history", JSON.stringify(dataArray.items));
        // console.log(pr2);
    } catch (error) {
        console.log(error.message);
    }
};

let data = [];

getData().then(() => {
    data = JSON.parse(localStorage.getItem("yt_history"));
    showUI(data)
    console.log(data)
});

const root = document.querySelector(".videos");
// console.log(root)

const showUI = (arr) => {
    // <div class="card" >
    // <h2>Video Thumbnail</h2>
    // <div class="video"></div>
    // </div>
    root.innerHTML = "";
    arr.forEach(videoElement => {
        let card = document.createElement("div");
        card.classList.add("card");
        let youTubeId = videoElement.id.videoId;
        // console.log(youTubeId)
        card.innerHTML = `
        <img onmouseover="handleMouseOver(event, '${youTubeId}')" src='${videoElement.snippet.thumbnails.high.url}'/>
        <h2 onclick="playVideo('${youTubeId}')">${videoElement.snippet.title}</h2>
    `;
        // console.log(card)
        root.appendChild(card);
        // console.log(root)
    });
};

function playVideo(videoId) {
    // console.log(videoId);
    window.open(`./video.html?id=${videoId}`, "_top");
}

function historyPage(){
    window.open(`./history.html`, "_top");
}

function handleMouseOver(event, videoId) {
    // event.playVideo();
    // console.log("Video")
}

function handleSubmit() {
    let val = document.querySelector(".search-bar input");
    // console.log(val.value)
    val = val.value.toLowerCase();
    let filteredArr = data.filter((el) => el.snippet.title.toLowerCase().includes(val));
    // console.log(filteredArr)
    showUI(filteredArr);
}

function searchEnter(event) {
    if (event.key === "Enter") handleSubmit()
}

