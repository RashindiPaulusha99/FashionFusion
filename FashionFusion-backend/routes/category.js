const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require("body-parser");
const path = require('path');
const fs = require("fs");
const multer = require("multer");
const Category = require('../models/category.models')
const cors = require('cors'); // Import the cors middleware

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

    const category = new Category({
        category: req.body.category,
        image: {
            data:fs.readFileSync(req.file.path),
            contentType:'image/png'
        },
    });
    
    try {
        const save = await category.save()
        res.json(save)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.put("/update/:id", upload.single("image"), async (req, res) => {

    try {
        const postId = req.params.id;
        const post = await Category.findById(postId);

        // Check if the request contains a category field and update it if it exists
        if (req.body.category) {
        post.category = req.body.category;
        }

        // Check if the request contains an image and update it if it exists
        if (req.file) {
            post.image = {
                data: fs.readFileSync(req.file.path),
                contentType: req.file.mimetype,
            };
        }

        // Save the updated post
        const response = await post.save();
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Error updating the post.' });
    }
})

router.get('/getAll', async (req, res) => {
    try {
        const get = await Category.find()
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
});

router.get('/getAll/categories', async (req, res) => {
    try {
        const categories = await Category.find({}).select('category');
        const categoryNames = categories.map((category) => category.category);
        res.json(categoryNames);
    }catch (error) {
        res.send('Error : '+error)
    }
});

router.delete('/delete/:id',async (req, res) =>{
    try {
        const get = await Category.findById(req.params.id)
        const response = await get.remove()
        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/get/:id',async (req, res) =>{
    try {
        const get = await Category.findById(req.params.id)
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router