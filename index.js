
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();
app.get('/',(req,res) => res.send("Home Page"));
app.get('/about',(req,res) => {
    return res.send("About Page");
});

app.listen(8000,() => console.log("Server is running on port 8000"));
    
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