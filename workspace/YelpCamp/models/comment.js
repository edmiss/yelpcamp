var mongoose = require("mongoose");

//create schema

var commentSchema = mongoose.Schema(
    {
        text:String,
        author:String
    }
    );

module.exports = mongoose.model("Comment",commentSchema);