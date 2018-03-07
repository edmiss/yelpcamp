var express = require("express"),
    app  = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var request = require("request");

//connect db
mongoose.connect('mongodb://localhost/yelp_camp');


//schema setup
var Campground = require('./models/campground'),
    seedDB = require('./seeds'),
    Comment = require('./models/comment');
    
    
//var Comment = require();
// Campground.create(
//     {
//         name:'Grandid Hill',
//         image:'https://pixabay.com/get/eb3db30a29fd063ed95c4518b7444795ea76e5d004b0144395f0c871a4e8b3_340.jpg',
//         description:'this is a huge granite hill, no bathroom.'
//     },function(err,campground){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Newly Created Campground");
//             console.log(campground);
//         }
//     }
// );


app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');


app.get('/', function(req,res){
    res.render('landing');
}
)

app.get('/campgrounds',function(req,res){
        //res.render('campgrounds',{campgrounds:campgrounds});
        // get all campground from db
        Campground.find({},function(err,allCampgrounds){
            if(err)
                console.log(err);
            else{
                res.render('campgrounds/index', {campgrounds:allCampgrounds})
            }
        });
    
});

app.get('/campgrounds/new',function(req,res){
    res.render('campgrounds/new.ejs');   
});


app.post("/campgrounds", function(req,res){
    //get data from form and add to campground
    var name = req.body.name;
    //redirect back to campground page
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name:name, image:image, description:desc};
    //create a new campground and save to db
    Campground.create(newCampground,function(err, newlyCreated){
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/campgrounds');
        }
    });
    
    //campgrounds.push(newCampground);
});

//show - show more info about one campground
app.get('/campgrounds/:id', function(req,res){
    //res.send('this will be our show page one day. ');
    Campground.findById(req.params.id).populate('comments').exec(function(err,foundCampground){
        if(err)
            console.log(err);
        else{
            //render show template
            console.log(foundCampground);
            res.render('campgrounds/show',{campground:foundCampground});
            
        }
        
    });//end innerfunction
});//end function req res



// =====================
// COMMENT ROUTES
// =====================

app.get('/campgrounds/:id/comments/new',function(req,res){
    //ad campground by id and send though when render
    Campground.findById(req.params.id,function(err,campground){
        if(err){
            console.log(err)
        }
        else{
            res.render('comments/new', {campground:campground});
        }
        
    });
});

app.post('/campgrounds/:id/comments',function(req,res){
    //lookup campground using id
    Campground.findById(req.params.id,function(err,campground){
        if(err){
            console.log(err);
            res.redirect('/campgrounds');
        }
        else{
            //comment create
            Comment.create(req.body.comment, function(err,comment){
                if(err){
                    console.log(err)
                }
                else
                {
                    campground.comments.push(comment);
                    campground.save();
                    
                    res.redirect('/campgrounds/'+campground._id);
                    
                }
                
            });
            
        }
        
    });
    //create new comment
    //connect new comment to campground
    //redirect campground show page
    
    
})


app.listen(process.env.PORT, process.env.IP,function(){
    console.log("the yelp camp started");
});


/*
//restful routes

index /dog get display a list of all dogs.

*/


/*

rest - pattern of defining route
REST
--conventional and reliable--



CRUD
create
read
update
destory

*/