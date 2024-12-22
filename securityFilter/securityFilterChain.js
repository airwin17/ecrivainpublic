const jwt = require('jsonwebtoken');

let username="admin";
let password="prk2047";
module.exports={
    login:function(req,res,next){
        if(req.body.username==username && req.body.password==password){
            const token = jwt.sign({ username: username }, 'prk2047', { expiresIn: '24h' });
            res.json({token: token });
            console.log('Login successful');
        }
        else{
            res.status(401).json({ message: 'Unauthorized' });
            console.log('Login failed');
        }
        next();
    },
    auth:function(req,res,next){
        const token = req.headers.authorization;
        
        if(token){
            jwt.verify(token, 'prk2047', (err, decoded) => {
                if (err) {
                    res.status(401).json({ message: 'Unauthorized' });
                    console.log('Unauthorized');
                } else {
                    next();
                }
            });
        }
        else{
            res.status(401).json({ message: 'Unauthorized' });
        }
    }
}