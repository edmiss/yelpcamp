var express = require("express");

var app = express();

app.get('/speak/:animal',function(req,res){
    if(req.params.animal=='dog')
       res.send('Dog');
    else if(req.params.animal=='cow')
       res.send('Moo');
    else if(req.params.animal=='pig')
       res.send('Oink');
})

app.get('/repeat/:text/:num',function(req,res){
    var text = (req.params.text);
    var num = req.params.num;

    var count = 0;
    var output = '';
    while(count<parseInt(num)){
        if(output=='')
        {
            output+=text;
        }
        else
        {
            output+=' ';
            output+=text;
        }
        count++;
    }
    res.send(output);
})



app.get('/*',function(req,res){
    res.send('page do not exist');
})


app.get('/',function(req,res){
    res.send('Hi there, welcome to my assignment!');
})






app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server started");
});
 