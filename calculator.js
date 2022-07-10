
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname+"/BMICalculator.html");
});

app.post("/", function(req, res) {

    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);

    var result = num1 + num2;

    res.send("the result of the calculation is "+result);
});

app.post("/bmicalculator", function(req, res) {
    
    var h = parseFloat(req.body.height);
    var w = parseFloat(req.body.weight);
    var result = w/(h*h);

    res.send("The BMI is "+result);
});

app.listen(3000, function() {
    console.log("Loging at the port 3000");
});





