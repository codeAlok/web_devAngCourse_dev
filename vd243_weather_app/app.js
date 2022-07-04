
const express = require('express');
const https = require("https");

const app = express();

// ******* vd - 246 ************
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res)=>{
    // console.log("Post request received");
    // console.log(req.body.cityName);

    const query = req.body.cityName; //deoghar
    const apiKey = "68c57800e5146f77527c2d500dd13931";
    const units = "metric";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;

    https.get(apiUrl, (response)=>{

        response.on("data", (data)=>{

            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDes = weatherData.weather[0].description;

            res.write("<p>The weather is currently " + weatherDes + "</p>");
            res.write("<h1>The temperature in "+ query + " is " + temp + "degrees Celcius.</h1>");
            
            res.send();
        });
    });

})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})