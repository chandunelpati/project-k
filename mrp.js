const express=require('express')
const app=express()
let honey={
    name:'wild honey',
    mrp:200,
}
app.get('/',function (req,res){
    res.json(honey)
})
app.listen(8085)