const express = require('express');

const signup = require('./routes/signup');

const login = require('./routes/login');

const BodyParser = require('body-parser');

const pdfDoc = require('pdfkit');

const path = require('path');

const fs = require('fs');

const app = express();

app.use(BodyParser.urlencoded({extended:false}));

app.use(signup);

app.post("/login",(req,res,next) => {
    console.log(path.join(__dirname,"../","views","login.html"));
    res.sendFile(path.join(__dirname,"../","views","login.html"));
    // console.log("hiii");
    // const resume = new pdfDoc();
    // resume.pipe(fs.createWriteStream('Resume.pdf'));
    // resume.pipe(res);
    // resume.text(req.body.name,100,100);
    // resume.end();
    
});

app.post("/userResume",(req,res,next) => {
    const Doc = new pdfDoc();
    Doc.pipe(fs.createWriteStream(Resume.pdf));
    Doc.pipe(res);
    Doc.text(req.body.email,100,100);
    Doc.text(req.body.password,100,100);
    Doc.end();
});

app.listen(3001);
