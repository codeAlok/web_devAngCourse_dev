//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response){
    // console.log(request);
    response.send("<h1>Hello, world</h1>");
});

app.get("/contact", function(request, response){
    response.send("Contact me at: alok60541@.com");
});
app.get("/about", function(request, response){
    response.send("know more about me:");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});