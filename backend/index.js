const express = require('express')
const app = express()
const port = 5000;
const mongoDb = require('./db')


mongoDb()
app.listen(port , (req,res) => {
    console.log(`server is listening on ${port}`);
})

app.get("/", (req,res) => {
    res.send("hi");
})