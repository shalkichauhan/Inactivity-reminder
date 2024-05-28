const express = require('express')
const path = require('path')

const app= express();

const pathJoining = path.join(__dirname,'/public')

app.use(express.static(pathJoining))

app.get('/',(req:string,res:string)=>{
    res.send(" this is working")
})

app.listen(3000,()=>{
    console.log('working')
})