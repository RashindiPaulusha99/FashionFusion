const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors'); // Import the cors middleware

const Review = require('../models/review.models')

app.use(express.json())
app.use(cors());

router.post('/save',async (req,res) => {
    const review = new Review({
        item_Id:req.body.item_Id,
        description:req.body.description,
        ratings:req.body.ratings,
        review_user_name:req.body.review_user_name,
        review_date:req.body.review_date
    })

    try {
        const save = await review.save()
        res.json(save)
    }catch (error) {
        res.send('Error : '+error)
    }

})

router.get('/getAll',async (req, res) =>{
    try {
        const get = await Review.find()
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/get/:id',async (req, res) =>{
    try {
        const get = await Review.findById(req.params.id)
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router
