const express = require('express');

const app = express();

const path = require('path');
const bodyParser = require('body-parser');


const PORT = 5000;

app.use("/meusite",express.static(path.join(__dirname, 'client')));

function consoleMethod(req, res, next){
    console.log(req.method);
    console.log(req.body);
    next();
}

function hello(req, res){
    res.send(`Hello World from ${req.method}`);
}
app.use("/", bodyParser.json());
app.get("/", consoleMethod ,hello);

app.put("/", consoleMethod ,hello);
app.post("/", consoleMethod ,hello);

app.delete("/", consoleMethod ,hello);


app.listen(PORT,()=>{
    console.log(`Server Running on Port: ${PORT}`)
})