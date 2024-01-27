const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors'); // Import the cors middleware

const Cart = require('../models/cart.models')
const Item = require('../models/item.models')

app.use(express.json())
app.use(cors());

router.post('/save',async (req,res) => {

    const cart = new Cart({
        user_Id:req.body.user_Id,
        item_Id:req.body.item_Id,
        name:req.body.name,
        brand:req.body.brand,
        qty:req.body.qty,
        unit_price:req.body.unit_price,
        total_units_price:req.body.total_units_price
    })

    try {
        const save = await cart.save()
        res.json(save)
    }catch (error) {
        res.send('Error : '+error)
    }

})

router.put("/update/:id",async (req,res) => {
    const post = await Cart.findById(req.params.id)

        post.user_Id=req.body.user_Id
        post.item_Id=req.body.item_Id
        post.name=req.body.name
        post.brand=req.body.brand
        post.qty=req.body.qty
        post.unit_price=req.body.unit_price
        post.total_units_price=req.body.total_units_price

    try {
        const save = await post.save()
        res.json(save)
    }catch (error) {
        res.send('Error : '+error)
    }

})

router.get('/getAll',async (req, res) =>{
    try {
        const get = await Cart.find()
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})
router.get('/get/:id',async (req, res) =>{
    try {
        const get = await Cart.findById(req.params.id)
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/get/userBy/:id',async (req, res) =>{
    try {
        const get = await Cart.find({ user_Id: req.params.id })
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.delete('/delete/:id',async (req,res) =>{
    try {
        const get = await Cart.findById(req.params.id)
        const response = await get.remove()
        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router
