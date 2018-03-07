var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/cat_app');


var catSchema = new mongoose.Schema({
   name:String,
   age:Number,
   temper:String
});

var Cat = mongoose.model('Cat',catSchema);



//adding a new cat to db

var mike =new Cat({
    name:"dick",
    age:7,
    temper:'evil'
    
});


/*
mike.save(function(err,cat){
    if(err)
    console.log('err happened');
    else
    {
        console.log('we just saved a cat to db');
        console.log(cat);
    }
    
});
*/
//retrieve all cats from db and console.log each one

Cat.find({},function(err,cats){
    if(err){
        console.log(err);
    }
    else{
        console.log('all cats');
        console.log(cats);
    }
});