import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
},
{
  timestamps: true, // will create a timestamp when the product is created or updated
});


const product = mongoose.model('Product', productSchema);


export default product;