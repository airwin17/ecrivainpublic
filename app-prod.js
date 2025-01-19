const express = require('express')
const router = require('./securityFilter/gateway.js');
//var cors = require('cors');
const app=express();
app.use(express.static( 'public' ));
//app.use(cors());
app.use("/api",router);
app.get('/switch',(req,res)=>{
    res.sendFile(__dirname+'/public/html/switch.html');
});
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+'/public/html/login.html');
});
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/public/html/home.html');
})
app.listen(80,()=>{
    console.log('Server is running on port 80');
});