const express = require("express")

const app = express();

app.use("/user", (err, req, res, next) => {
    try{
        res.send("hello world!")
    }
    catch{
        res.status(500).send("Internal Server Error");
    }
})


// Middleware - Route Handler