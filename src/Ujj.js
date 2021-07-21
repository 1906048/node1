const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

const staticPath=path.join(__dirname,"../templates/views");
const PartialsPath=path.join(__dirname,"../templates/partials");

hbs.registerPartials(PartialsPath);
app.set('views',staticPath);

//to set the view engine
app.set("view engine" , "hbs");

//template engine route
app.get("", (req,res)=>{
    res.render("index");
});

app.get("/", (req,res)=>{
    res.send("Hello from express!!!!!!!!!!!");
});

app.get("/about", (req,res)=>{
    res.send("Hello from about page!!");
});

//for showing error page
app.get("*", (req,res)=>{
    res.render("404" , {errcomment:"Error occurs"});
})
app.listen(8000, ()=>{
    console.log("listening!!");
})
