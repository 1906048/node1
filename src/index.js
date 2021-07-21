const path = require("path");
const express = require("express");
const app = express();

//console.log(path.join(__dirname,"../public"));
const staticPath = path.join(__dirname,"../public");
//builtin middleware
app.use(express.static(staticPath));


app.get("/", (req,res)=>{
    res.send("Hello from express!!");
});

app.get("/about", (req,res)=>{
    res.send("Hello from about page!!");
});
app.listen(8000, ()=>{
    console.log("listening!!");
})
