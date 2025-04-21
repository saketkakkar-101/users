const express = require('express')
const app = express()
const port = 5000;
const mongoDb = require('./db')
const cors = require('cors')

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  }));

app.use('/api' , require('./routes/Createuser'))

mongoDb()
app.listen(port , (req,res) => {
    console.log(`server is listening on ${port}`);
})

app.get("/", (req,res) => {
    res.send("hi");
})