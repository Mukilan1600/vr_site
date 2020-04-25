var express = require("express");
var body_parser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var morgan = require("morgan");

var app = express();

app.use(cors());
app.use(morgan("default"));
app.use(body_parser.json());

const port = process.env.PORT || 8080;

app.get("/",(req,res) => {
    res.send("Hello Lord explosion diarrhea");
});

app.listen(port,()=>{
    console.log("Listening on port "+port);
});