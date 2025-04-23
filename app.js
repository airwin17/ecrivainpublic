const express = require('express')

//var cors = require('cors');
const app=express();
app.use(express.static( 'public' ));
//app.use(cors());
app.use("/api",router);
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/public/html/home.html');
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});