const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((req,res) => {
    if(req.url === "/favicon.ico"){
        res.end();
        return;
    } 
    const log = `${Date.now()}: ${req.url} New Req Recieved\n`
    const myUrl = url.parse(req.url);
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case '/':
                res.end("Home Page");
                break;
            case '/about':
                res.end("Kshitij Londhe");
                break;
            default:
                res.end("404 Page Not Found");
        }
    });
});
            myServer.listen(8000,() =>console.log("Server Started"));