const express = require("express")
const app = express()

app.get("/api",(req,res) =>{
    res.json({"names":["Abdul","monk","munyun"]})
})

app.listen(5000,()=>{console.log("server lit")})