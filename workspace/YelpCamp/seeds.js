var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require('./models/comment');

var data = [
    {name:"Could's rest", image:'https://pixabay.com/get/eb35b70b2df6033ed95c4518b7444795ea76e5d004b0144395f3c67dafefb4_340.jpg',description:'nothing much'},
    {name:"Desert rest", image:'https://pixabay.com/get/e136b80728f31c2ad65a5854ee4d459fe270e7c818b4134196f7c571a5ec_340.jpg',description:'nothing much'},
    {name:"Somewhere rest", image:'https://pixabay.com/get/ec31b90f2af61c2ad65a5854ee4d459fe270e7c818b4134196f7c571a5ec_340.jpg',description:'nothing much'},
    ];

function seedDB(){
      //remove all campgrounds
    Campground.remove({},function(err){
        if(err)
            console.log(err);
        else{
            console.log('all campgrounds removed');
            
    Comment.remove({});
            
            
    //add few campground
        data.forEach(function(seed){
           Campground.create(seed,function(err,campground){
              if(err)
              console.log(err);
              else
              {
                  console.log('added a campground');
                  Comment.create(
                      {text:'This place is great but i wish there is internet',
                       author:'Homer'   
                      },function(err,comment){
                          if(err){
                          console.log(err);}
                          else{
                              campground.comments.push(comment._id);
                              campground.save();
                              //console.log(campground);
                              console.log('created new comment');
                          }
                          
                      });
              }
           }); 
        });
        }//end else//
    });
    
    //add few comment
    
    
};
module.exports  = seedDB();