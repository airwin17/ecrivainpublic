const express = require('express')
const router = require('./securityFilter/gateway.js');
const fs = require('fs');
const https = require('https');
const cert = fs.readFileSync('/etc/letsencrypt/live/ecrivainpublicmarseille.com/cert.pem');
const ca = fs.readFileSync('/etc/letsencrypt/live/ecrivainpublicmarseille.com/chain.pem');
const key = fs.readFileSync('/etc/letsencrypt/live/ecrivainpublicmarseille.com/privkey.pem');
const httpsOptions = {cert, ca, key};
//var cors = require('cors');
const app=express();
app.use(express.static( 'public' ));
//app.use(cors());

const httpsServer = https.createServer(httpsOptions, app).listen(443);
app.get("/",(req,res)=>{
    console.log('Request received');
    res.sendFile(__dirname+'/public/html/home.html');
})
