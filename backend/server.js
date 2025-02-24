import express from "express";


const app = express();

app.get('/products', (req, res) => {
  res.send('data.products.json');

}); //defines a route handler for HTTP GET requests

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
}) // defines a

