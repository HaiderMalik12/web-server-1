var express=require('express');
var app=express();
var PORT=3000;

//App ly Middleware to the whole routs
var middleware={
    requireAuthenication:function(req,res,next){
        console.log('private Rout Hit');
        next();
    },
    logger:function(req,res,next){
        console.log('Request: '+req.originalUrl +' Method : '+req.method + '  '+new Date().toString() );
    }
};
app.use(middleware.logger);

/*
start Routing
 */
app.get('/',function(req,res){

    res.send('Hey Express!');
});

app.get('/about',function(req,res){
    res.send('Hey from About');
});

/*
start serving static pages
 */
app.use(express.static(__dirname+'/public'));



app.listen(PORT,function(){
   console.log('Express Lisetning on PORT '+PORT);
});