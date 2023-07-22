const products = require('../data/products.json');
const Product = require('../models/productModel');


const dotenv = require('dotenv');
// const connectDatabase = require('../config/database');

dotenv.config({path:"backend/config/config.env"});

const mongoose = require ('mongoose');

const connectDatabase = ()=>{
    mongoose.connect("mongodb+srv://naveenelangovan16:naveen162313@cluster0.iqieybg.mongodb.net/ecommerce",{
        useNewUrlParser:true,
        useUnifiedTopology:true      
    }).then (con=>{
        console.log(`MongoDB is connected to the host: ${con.connection.host}`)
    }).catch ((err) => {
        console.log(err)
    })
}

connectDatabase();


const seedProducts = async ()=> {
    try {
        await Product.deleteMany();
        console.log("Products deleted")
        await Product.insertMany(products);
        console.log("All Products Added");
    } catch(error) {
        console.log(error.message);
    }
    process.exit();
}

seedProducts();