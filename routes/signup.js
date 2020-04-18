const express = require('express');

const router = express.Router();

const path = require('path');

router.use(express.static('views'));

router.use("/signup",(req,res,next) => {
    console.log(path.join(__dirname,"../","views","signup.html"));
    res.sendFile(path.join(__dirname,"../","views","signup.html"));
});

module.exports = router;