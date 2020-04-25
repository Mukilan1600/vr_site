var express = require("express");
var body_parser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var morgan = require("morgan");
var path = require("path");
var config = require('./config/database');
var queryString = require('querystring');
var app = express();
var User = require('./models/user')

mongoose.connect(config.database,{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log("Database connection successfull");
});

//Require cors and morgan for cross-site and debugging
app.use(cors());
app.use(morgan("default"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended:true
}));

//Set static path
app.use(express.static(path.join(__dirname,'public')));

const port = process.env.PORT || 3000;

app.post("/submit",(req,res) => {
    var name = req.body.name,gender = req.body.gender,age = req.body.age,affection_rate=0;
    for(var key in req.body)
        if(req.body[key]=="yes") affection_rate++; 
    var prob="Low";
    if(affection_rate>7)
        prob="High";
    else if(affection_rate > 5)
        prob="Medium";
    let newUser = new User({
        name: name,
        gender: gender,
        age: age,
        affectionRate: affection_rate
    });
    User.log_response(newUser);
    var query=queryString.stringify({
        "probability":prob
    })
    return res.redirect('/result.html?'+query);
});

app.listen(port,()=>{
    console.log("Listening on port "+port);
});