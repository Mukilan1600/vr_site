var express = require("express");
var body_parser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var morgan = require("morgan");
var path = require("path");

var app = express();

//Require cors and morgan for cross-site and debugging
app.use(cors());
app.use(morgan("default"));
app.use(body_parser.json());

//Set static path
app.use(express.static(path.join(__dirname,'public')));

const port = process.env.PORT || 3000;

app.get("/",(req,res) => {
    res.send("Hello Lord explosion diarrhea");
});

app.listen(port,()=>{
    console.log("Listening on port "+port);
});