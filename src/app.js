//API
//get - read
//post - create
//put - update
//delete - delete
const express = require("express");
const app = express();

//app.get(route,callback);
app.get("/", (req,res)=>{
    res.send("Hello from express!!");
});

app.get("/about", (req,res)=>{
    res.send("Hello from about page!!");
});
app.listen(8000, ()=>{
    console.log("listening!!");
})


//tutorial 25