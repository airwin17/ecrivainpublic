var state=true;
module.exports={
    getState:function(req,res,next){
        res.json({state:state});
        console.log('State sent');
        next();
    },
    switchState:function(req,res,next){
        state=!state;
        res.json({state:state});
        console.log('State changed');
        next();
    }
}