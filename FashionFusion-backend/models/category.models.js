const mongoose = require('mongoose')

const category = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    image:{
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('Category',category)