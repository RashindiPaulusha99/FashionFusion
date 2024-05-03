const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')
const item = require('./routes/item')
const review = require('./routes/review')
const payment = require('./routes/payment')
const cart = require('./routes/cart')
const category = require('./routes/category')
const brand = require('./routes/brand')
const preference = require('./routes/preference')
const Grid = require("gridfs-stream");
const cors = require('cors');

const app=express()
const port = 4001

const url = 'mongodb://127.0.0.1/fashionfusion'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

app.get('/', (req, res) => {
    res.send('Hello World!')
})

con.on("open", () => {
    console.log('MongoDB connected!');
})

app.use(express.json())
app.use(cors());

app.use('/user', user)
app.use('/item', item)
app.use('/review', review)
app.use('/payment', payment)
app.use('/cart', cart)
app.use('/category', category)
app.use('/brand', brand)
app.use('/preference', preference)

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})
