var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var friends = [1,2,3,4,5,6];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extened: true}));

app.get('/', function(req,res){
    res.render('home');
});

app.get('/friends',function(req,res){
    res.render('friends',{friends:friends});
});


app.post('/addfriend',function(req,res){
    var newfriend = (req.body.newfriend);
    friends.push(newfriend);
    res.redirect('/friends');
})

app.listen(process.env.PORT, process.env.IP,function(){
    console.log('server started!!');
    
})