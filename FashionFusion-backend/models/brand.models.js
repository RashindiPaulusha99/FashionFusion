var mongoose = require('mongoose');

var brandSchema = new mongoose.Schema({
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Brand', brandSchema);