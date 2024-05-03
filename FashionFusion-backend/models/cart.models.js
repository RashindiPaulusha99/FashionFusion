const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    user_Id: {
        type: String,
        required: true
    },
    item_Id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    colour:{
        type: String,
        required: true
    },
    size:{
        type:String,
        required:true
    },
    unit_price: {
        type: Number,
        required: true
    }, 
    total_units_price:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Cart',cartSchema)