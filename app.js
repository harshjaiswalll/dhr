
const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req,res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result of calculator is " + result);
});
    

app.listen(3000,() => {
    console.log("server started on port 3000"); 
});


 