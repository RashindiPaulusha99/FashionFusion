const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require("body-parser");
const path = require('path');
const fs = require("fs");
const multer = require("multer");
const Brand = require('../models/brand.models')
const cors = require('cors');

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

router.post("/save", upload.single("image"), async (req, res) => {

    const brand = new Brand({
        brand: req.body.brand,
        category: req.body.category,
        description: req.body.description,
        image: {
            data:fs.readFileSync(req.file.path),
            contentType:'image/png'
        },
    });

    try {
        const save = await brand.save()
        res.json(save)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.put("/update/:id", upload.single("image"), async (req, res) => {

    try {
        const postId = req.params.id;
        const post = await Brand.findById(postId);

        if (req.body.category) {
            post.category = req.body.category;
        }

        if (req.body.brand) {
            post.brand = req.body.brand;
        }

        if (req.body.description) {
            post.description = req.body.description;
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

router.get('/getAll', async (req, res) => {
    try {
        const get = await Brand.find()
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
});

router.delete('/delete/:id',async (req, res) =>{
    try {
        const get = await Brand.findById(req.params.id)
        const response = await get.remove()
        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/get/:id',async (req, res) =>{
    try {
        const get = await Brand.findById(req.params.id)
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/getAll/brands', async (req, res) => {
    try {
        const brands = await Brand.find({}).select('brand');
        const brandsNames = brands.map((brand) => brand.brand);
        res.json(brandsNames);
    }catch (error) {
        res.send('Error : '+error)
    }
});

module.exports = router