const express =require('express')
const app = express()

app.get("/:id",(req,res)=>{
  res.send("Hello there "+req.params.id)
})


app.listen(process.env.PORT || 3000,()=>console.log("Server started at 3000"))
