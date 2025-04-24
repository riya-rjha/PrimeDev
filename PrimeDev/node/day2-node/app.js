const http = require("http"); // to use http server and client
const PORT = 200;
const fsPromises = require("fs/promises");

const server = http.createServer(async (req, res) => {
    console.log(req)
    console.log("Server is running now ");

    res.setHeader('content-type', 'text/html')
    res.setHeader('my-name', 'RRJ')

    // res.end("<button>Click me Now</button>")

    const response = await fsPromises.readFile("./pages/homePage.html", {
        encoding: "utf-8",
    });
    console.log(response)

    res.end(response)

    // console.log(typeof req)
    // res.end("Done123"); // Processed done
});

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    console.log("-------- http://localhost:200/ ----------")
})

// http://localhost:200/ -> Prints response in terminal
