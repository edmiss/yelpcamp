var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('Hi there!');
})




app.get('/bye', function(req,res){
    
    res.send('bye!!!');
    
})



app.get('/r/:subRedditName', function(req,res){
    
    res.send('wilecome to subreddit');
});
//route parameter - path varible :


app.get('/r/:subRedditName/', function(req,res){
    
    res.send('wilecome to subreddit');
});

app.get('/*', function(req,res){
    res.send('You are a star!!!');
})




//error message for route that is not defined

//order of route - first routes is the only route will be run . 


app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server started");
});
 
 