// importing modules
const express=require("express")
const path=require('path')
// assigning express function to a variable named app
const app=express()
// app.get will take the request and will recieve a response from server
//app.use is used to create a middle ware 
//middle ware is used to eork a data before doing a proccess
app.use(function(req,res,next){
    console.log("middle-ware");
    next()
})

app.get('/',function(req,res){   
    // res.send works like write function in node
    res.send("hai iam ahammed shefin")
})
app.get('/signup',function(req,res){
    res.send("this is signup")

})
app.post('/data',function(req,res){
    res.send('<h1> hai '+req.query.firstname+'</h1>')
})

let PORT=process.env.PORT || 3000
// app.listen will create a port
app.listen(PORT,function(){
    console.log("server started")
})
