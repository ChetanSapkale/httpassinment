const http = require("http");
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url == "/home") {
        res.end("<h1>Welcome to Home page</h1>")
    }
    else if(req.url == "/about"){
        res.end("<h1>About Page</h1>")
    }
    else if(req.url == "/getproductdata"){
        fs.readFile("./db.json", "utf-8", (err, data)=>{
            if(err) {
                console.log(err)
            }
            else{
                const jsonData = JSON.parse(data)
                res.end(JSON.stringify(jsonData.products))
            }
        })
    }
    else if(req.url == "/user"){
        fs.readFile("./db.json", "utf-8", (err, data)=>{
            if(err) {
                console.log(err)
            }
            else{
                const jsonData = JSON.parse(data)
                res.end(JSON.stringify(jsonData.user))
            }
        })
    }
    else{
        res.end("<h1>Invalid End Point</h1>");
    }
});

server.listen(7000, () => {
    console.log("Listening on port 7000");
});

// http://localhost:7000