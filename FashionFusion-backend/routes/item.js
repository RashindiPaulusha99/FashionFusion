const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require("body-parser");
const path = require('path');
const fs = require("fs");
const multer = require("multer");
const cors = require('cors'); // Import the cors middleware

const Item = require('../models/item.models')

app.use(express.json())
app.use(cors());

require("dotenv").config()

app.use(bodyParser.urlencoded(
    { extended:true }
))

app.use(bodyParser.json())

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

router.post("/save", upload.single("image"), async (req, res) => {

    const item = new Item({
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        brand:req.body.brand,
        qty_on_hand:req.body.qty_on_hand,
        discount:req.body.discount,
        volume:req.body.volume,
        unit_of_volume:req.body.unit_of_volume,
        unit_price:req.body.unit_price,
        image: {
            data:fs.readFileSync(req.file.path),
            contentType:'image/png'
        },
    });

    try {
        const save = await item.save()
        res.json(save)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.put("/update/:id", upload.single("image"), async (req, res) => {

    try {
        const postId = req.params.id;
        const post = await Item.findById(postId);

        if (req.body.name) {
            post.name = req.body.name;
        }

        if (req.body.description) {
            post.description = req.body.description;
        }

        if (req.body.category) {
            post.category = req.body.category;
        }

        if (req.body.brand) {
            post.brand = req.body.brand;
        }

        if (req.body.qty_on_hand) {
            post.qty_on_hand = req.body.qty_on_hand;
        }

        if (req.body.discount) {
            post.discount = req.body.discount;
        }

        if (req.body.volume) {
            post.volume = req.body.volume;
        }

        if (req.body.unit_of_volume) {
            post.unit_of_volume = req.body.unit_of_volume;
        }

        if (req.body.unit_price) {
            post.unit_price = req.body.unit_price;
        }

        if (req.file) {
            post.image = {
                data: fs.readFileSync(req.file.path),
                contentType: req.file.mimetype,
            };
        }

        const response = await post.save();
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Error updating the post.' });
    }
})

router.put("/updateQty/:id", upload.single("image"), async (req, res) => {

    const post = await Item.findById(req.params.id)
    post.qty_on_hand=req.body.qty_on_hand

    try {
        const response = await post.save()
        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/getAll/:status',async (req, res) =>{
    try {
        if (req.params.status === "All") {
            const get = await Item.find()
            res.json(get)
        }else{
            const get = await Item.find({ category: req.params.status });
            res.json(get);
        }
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/getOrder/:status/:order',async (req, res) =>{
    try {
        let order = req.params.order;
        let sortOrder = 1;

        if (order === "DESC") {
            sortOrder = -1;
        }

        const category = req.params.status;
        const get = await Item.find({ category: category }).sort({ unit_price: sortOrder });

        res.json(get);
    } catch (error) {
        res.status(500).send('Error: ' + error);
    }
})


router.get('/get/:id',async (req, res) =>{
    try {
        const get = await Item.findById(req.params.id)
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.delete('/delete/:id',async (req, res) =>{
    try {
        const get = await Item.findById(req.params.id)
        const response = await get.remove()
        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router
