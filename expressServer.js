 // Import the Express.js library
const express = require('express');

// Create an instance of an Express application
const app = new express();

// Initialize an array to store login details
let loginDetails = [];
let months=['January','February','March','April','May','June','July','August','September','October','November','December'];

// Define the root route to send a welcome message
app.get("/", (req, res) => {
    res.send("Welcome to the express server");
});

// Define a route to send login details as a JSON string
app.get("/loginDetails", (req, res) => {
    res.send(JSON.stringify(loginDetails));
});

// Define a route to handle login requests and store login details
app.post("/login/:name", (req, res) => {
    loginDetails.push({ "name": req.params.name, "login_time": new Date() });
    res.send(req.params.name + ", You are logged in!");
});

// Define a dynamic route to greet users by name
app.get("/:name", (req, res) => {
    res.send("Hello " + req.params.name);
});

app.post("/fetchMonth/:num",(req,res)=>{
    const num=req.params.num
    switch (parseInt(num)){
        case 1:
            return res.send(months[0])
        case 2:
            return res.send(months[1])
        case 3:
            return res.send(months[2])
        case 4:
            return res.send(months[3])
        case 5:
            return res.send(months[4])
        case 6:
            return res.send(months[5])
        case 7:
            return res.send(months[6])
        case 8:
            return res.send(months[7])
        case 9:
            return res.send(months[8])
        case 10:
            return res.send(months[9])
        case 11:
            return res.send(months[10])
        case 12:
            return res.send(months[11])
        default:
            return res.status(403).json({message:'wrong number'})
    }
    
})
// Start the server and listen on port 3333
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});
