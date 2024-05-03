const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors'); // Import the cors middleware

const Preference = require('../models/preference.model')

app.use(express.json())
app.use(cors());

router.post('/save',async (req,res) => {
    const preference = new Preference({
        user_Id:req.body.user_Id,
        item_Id:req.body.item_Id,        
        preference_date:req.body.preference_date
    })

    try {
        const save = await preference.save()
        res.json(save)
    }catch (error) {
        res.send('Error : '+error)
    }

})

router.get('/getAll',async (req, res) =>{
    try {
        const get = await Preference.find()
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/get/:id',async (req, res) =>{
    try {
        const get = await Preference.findById(req.params.id)
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router
