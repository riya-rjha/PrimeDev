const http = require("http"); // to use http server and client
const PORT = 200;

const server = http.createServer((req, res) => {
    console.log(req);
    console.log("Server is running");

    res.setHeader('content-type', 'text/html')
    res.setHeader('my-name', 'RRJ')

    res.end("<button>Click me </button>")

    // console.log(typeof req)
    // res.end("Done123"); // Processed done
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    console.log("-------- http://localhost:200/ ----------")
})

// http://localhost:200/ -> Prints response in terminal