const express =require('express')
const app = express()

app.get("/",(req,res)=>{
  res.send("Working!")
})


app.listen(process.env.PORT || 3000,()=>console.log("Server started at 3000"))
