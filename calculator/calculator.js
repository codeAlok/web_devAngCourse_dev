// jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){
    // res.sendFile("index.html");

    // console.log(__dirname);  // shows the entire file path of the folder

    res.sendFile(__dirname + "/index.html");
});


// to hold post request
app.post("/", function(req, res){
    res.send("Thanks for posting that");
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});