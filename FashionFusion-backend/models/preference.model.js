const mongoose = require('mongoose')

const preference = new mongoose.Schema({
    user_Id: {
        type: String,
        required: true
    },
    item_Id: {
        type: String,
        required: true
    },
    preference_date:{
        type:Date,
        required:true
    }
    
})

module.exports = mongoose.model('Preference',preference)