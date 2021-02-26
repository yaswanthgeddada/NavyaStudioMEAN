const mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    url:{
        type:String,
        required:true,
    },
    date:{
        type:String
    },
    column:{
        type:Number,
    }

})

module.exports = mongoose.model('photosUrls',photoSchema)