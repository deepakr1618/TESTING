const express =require('express')
const app = express()

app.get("/:id",(req,res)=>{
  res.send("You are bad :  "+req.params.id)
})


app.listen(process.env.PORT || 3000,()=>console.log("Server started at 3000"))
