const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    item_Id:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    ratings:{
        type:Number,
        required:true
    },
    review_user_name:{
        type:String,
        required:true
    },
    review_date:{
        type:Date,
        required:true
    }
})

module.exports = mongoose.model('Review',reviewSchema)