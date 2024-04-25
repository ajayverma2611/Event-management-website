const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const express = require('express');
const app = express();

// app.use(express.static('public'));

app.use(express.static(__dirname));

const port = 8000;

const home = fs.readFileSync(__dirname + '/home.html');
const final = fs.readFileSync(__dirname + '/final.html');
const orderbill1 = fs.readFileSync(__dirname + '/orderbill1.html');
const orderstatus1 = fs.readFileSync(__dirname + '/orderstatus1.html');
const index = fs.readFileSync(__dirname + '/index.html');
const show_details = fs.readFileSync(__dirname + '/show_details.html');



const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url;
    res.setHeader('Content_Type','text/html');
    if(url=='/'){
        res.end(home);
    }
    else if(url=='/home'){
        res.end(home);
    }
    else if(url=='/final'){
        res.end(final);
    }
    else if(url=='/orderbill1'){
        res.end(orderbill1);
    }
    else if(url=='/orderstatus1'){
        res.end(orderstatus1);
    }
    else if(url=='/index'){
        res.end(index);
    }
    else if(url=='/show_details'){
        res.end(show_details);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
})



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

