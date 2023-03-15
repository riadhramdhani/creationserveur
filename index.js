const express=require("express")
const cors=require("cors")
const app=express()
const port=3400
app.use(cors())
app.use(express.json())
app.get("/hi",(req,res)=>{
    res.send("hello world")
})









app.listen(port,()=>console.log("server is runing"))