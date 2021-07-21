const express = require("express");
const app = express();

//to send html element
app.get("/", (req,res)=>{
    res.send("<h1>Welcome to homepage....</h1>");
})

//to send mutliple html elements
app.get("/about", (req,res)=>{
    res.write("<h1> Welcome to aboutpage....</h1>");
    res.write("<h1> Welcome to aboutpage again....</h1>");
    res.send();
})

app.get("/contact", (req,res)=>{
    res.send("Welcome to contactpage....");
})

//to send JSON 
app.get("/temp", (req,res)=>{
    res.send( {
        id:1,
        name: "Ujjwal",
    });
})

app.listen(8000, ()=>{

});