const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((req,res) => {
    if(req.url === "/favicon.ico"){
        res.end();
        return;
    } 
    const log = `${Date.now()}: ${req.url} New Req Recieved\n`
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("log.txt",log,(err,data)=> {
        switch(myUrl.pathname){
        case '/':
            res.end("Home Page");
            break;
        case '/about':
            const username = myUrl.query.name;
            res.end(`Hi, ${username}`);
            break;
        default:
            res.end("404 Page Not Found");
        }
    });
});
//     fs.appendFile("log.txt",log,(err,data)=>{
//         switch(myUrl.pathname){
//             case '/':
//                 res.end("Home Page");
//                 break;
//             case '/about':
//                 res.end("Kshitij Londhe");
//                 break;
//             default:
//                 res.end("404 Page Not Found");
//         }
//     });
// });
            myServer.listen(8000,() =>console.log("Server Started"));