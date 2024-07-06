const express=require('express')
const app=express()
app.get('/honey',function(req,res){
    res.send("honey products");
})
app.get('/clothes',function(req,res){
    res.send("clothes products");
})
app.get('/shampoo',function(req,res){
    res.send("shampoo products");
})
app.listen(8085)
