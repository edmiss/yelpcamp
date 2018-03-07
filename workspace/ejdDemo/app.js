
var express = require("express")
var app = express();

app.use(express.static("public"));

app.get('/',function(req,res){
    res.render('home.ejs');
    //res.send('<h1>welcome to homepage</h1>');
})


app.get('/love/:thing',function(req,res){
    var thing = req.params.thing;
    res.render('love.ejs',{thingVar: thing});
})

app.get('/posts', function(req,res){
    var posts = [
            {title:"Post 1", author : "Susy"},
            {title:"Post 2", author :"author2"},
        ]
    res.render('posts.ejs', {posts:posts});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server listening')
})