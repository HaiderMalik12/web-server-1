var express=require('express');
var app=express();
var PORT=process.env.PORT || 3000;


//App ly Middleware to the whole routs
var middleware=require('./middleware.js');

app.use(middleware.logger);

/*
start Routing
 */
app.get('/',function(req,res){

    res.send('Hey Express!!!');
});

app.get('/about',function(req,res){
    res.send('Hey from About!');
});

/*
start serving static pages
 */
app.use(express.static(__dirname+'/public'));



app.listen(PORT,function(){
   console.log('Express Lisetning on PORT '+PORT);
});