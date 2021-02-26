const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userName:{
        type:String,
    },
    userMail:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String
    },
    password:{
        type:Number,
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('users',userSchema)