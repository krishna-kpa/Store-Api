require('dotenv').config();
require('express-async-errors');

const express = require("express");
const app = express();


const connectDB = require('./db/connect');
const products = require('./models/product')
const productsRouter = require("./routes/products");

const errorMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');


// Middleware
app.use(express.json());


//Routes

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
  });


app.use('/api/v1/products', productsRouter);

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);


const port = process.env.PORT || 3000
const productList = require('./products.json')

const start = async ()=>{
    try{
        // DB connect
        await connectDB(process.env.Mongo_URI)
        await products.deleteMany()
        await products.create(productList)
        console.log("Connected to DB...")
        app.listen(port,(err)=>{
            if(err){
                console.log("Cant connect on "+port)
            }else{
                console.log("Connected on "+port)
            }
        })
    }catch(err){
        console.log("Error Occured..."+err)
    }
}

start();
