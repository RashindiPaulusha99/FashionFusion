const express = require('express')
const app = express()
const router = express.Router()
const FormData = require('form-data');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require('cors'); 

const Cart = require('../models/cart.models')
const Item = require('../models/item.models')

require("dotenv").config()

app.use(express.json())

app.use(bodyParser.urlencoded(
    { extended:true }
))
app.use(bodyParser.json())

app.use(cors());

app.set("view engine","ejs");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

router.post('/save',async (req,res) => {

    const cart = new Cart({
        user_Id:req.body.user_Id,
        item_Id:req.body.item_Id,
        name:req.body.name,
        brand:req.body.brand,
        qty:req.body.qty,
        colour:req.body.colour,
        size:req.body.size,
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
        post.qty=req.body.qty,
        post.colour=req.body.colour,
        post.size=req.body.size,
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

router.post('/try', upload.fields([{ name: 'personImage', maxCount: 1 }, { name: 'clothImage', maxCount: 1 }]), async (req, res) => {
    console.log(req.files)
    const personImage = req.files['personImage'][0].path;
    console.log(personImage)
    const clothImage = req.files['clothImage'][0].path;

    // Construct a FormData object to send to the external API
    const data = new FormData();
    data.append('personImage', fs.createReadStream(personImage));
    data.append('clothImage', fs.createReadStream(clothImage));

    const options = {
    method: 'POST',
    url: 'https://virtual-try-on2.p.rapidapi.com/clothes-virtual-tryon',
    headers: {
        'X-RapidAPI-Key': '9cd612fd8cmsh915a608e19ca7b9p177afdjsn67d4a0b031d4',
        'X-RapidAPI-Host': 'virtual-try-on2.p.rapidapi.com',
        ...data.getHeaders(),
    },
    data: data
    };

    try {
        const response = await axios.request(options);
        res.json(response.data)
        // console.log(response.data);
    } catch (error) {
        console.error(error);
    }

})

module.exports = router
