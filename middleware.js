/**
 * Created by HaiderNazir on 1/20/2016.
 */
var middleware={
    requireAuthenication:function(req,res,next){
        console.log('private Rout Hit');
        next();
    },
    logger:function(req,res,next){
        console.log('Request: '+req.originalUrl +' Method : '+req.method + '  '+new Date().toString() );
    }
};

module.exports=middleware;