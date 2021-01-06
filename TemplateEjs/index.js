const PORT = 3000;
const express = require('express');
// const fs = require('fs');
const path = require('path');
const app = express();

let users = [ 

    {
        name: "Felipe Lopes", 
        phone: "(99)123456"
    },
    {
        name: "Felipe Show", 
        phone: "(99)1234567"
    },
    {
        name: "Felipe Muito Bom", 
        phone: "(99)123456789"
    }

]

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('user', {users});
});

app.get("/about", (req, res) => {
   
    res.render('about');
});

app.listen(PORT, () =>{
    console.log('Server Running on 3000');
});