const express = require('express');

const router = express.Router();

const path = require('path');

router.use(express.static('views'));

router.post("/login",(req,res,next) => {
    console.log(path.join(__dirname,"../","views","login.html"));
    res.sendFile(path.join(__dirname,"../","views","login.html"));
    // console.log("hiii");
    // const resume = new pdfDoc();
    // resume.pipe(fs.createWriteStream('Resume.pdf'));
    // resume.pipe(res);
    // resume.text(req.body.name,100,100);
    // resume.end();
    
});

module.exports = router;