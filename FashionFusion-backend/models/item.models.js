const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    qty_on_hand:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    volume:{
        type:Number,
        required:true
    },
    unit_of_volume:{
        type:String,
        required:true
    },
    unit_price:{
        type:Number,
        required:true
    },
    image:{
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('Item',itemSchema)