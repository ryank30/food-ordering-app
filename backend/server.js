import express from "express";
import dotenv from 'dotenv'; // to access the mongo_uri 
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

app.post('/products', async (req, res) => {           // to send some data along with the request
  const product = req.body;  // user will send this data

  if (!product.name || !product.price || !product.image){
    return res.status(400).json({ success: false, message: "Invalid product data" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, product: newProduct });
  } catch (error) {
    console.error("Error in Create product:", error.message);
    res.status(500).json({ success: false, message:"Server Error"});
  }
}); //defines a route handler for HTTP post requests

app.listen(3000, () => {
  connectDB();
  console.log("Server started at http://localhost:3000");
}) // defines a

