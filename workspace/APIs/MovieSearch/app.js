var express = require("express");
var app = express();

var request = require("request");


app.get('/', function(req,res){
    res.send('this will be the landing page soon.');
}
)

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("the yelp camp started");
});