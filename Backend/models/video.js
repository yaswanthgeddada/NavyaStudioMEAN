const mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    url:{
        type:String,
        required:true,
    },
    photoUrl:{
        type:String
    },
    date:{
        type:String,
    }

})

module.exports = mongoose.model('videoUrls',videoSchema)