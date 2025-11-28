const express = require('express')

//var cors = require('cors');
const app=express();
app.use(express.static( 'public' ));
//app.use(cors());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/public/html/home.html');
})
app.listen(80,()=>{
    console.log('Server is running on port 80');
});