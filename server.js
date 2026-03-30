const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// 🔴 PASTE YOUR MONGODB URL BELOW
mongoose.connect('mongodb://127.0.0.1:27017/arman-store')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
   
// 👤 USER MODEL
const User = mongoose.model('User', {
  username: String,
  password: String
});

// 📦 PRODUCT MODEL
const Product = mongoose.model('Product', {
  name: String,
  price: Number,
  category: String
});

// 🛒 ORDER MODEL
const Order = mongoose.model('Order', {
  items: Array,
  total: Number
});

// 🔐 SIGNUP
app.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send("User Created");
  } catch (err) {
    res.send("Error");
  }
});

// 🔐 LOGIN
app.post('/login', async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password
  });

  if (user) {
    res.send("Success");
  } else {
    res.send("Invalid Login");
  }
});

// 📦 GET PRODUCTS
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ➕ ADD PRODUCT (ADMIN)
app.post('/add-product', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send("Product Added");
});

// 🛒 PLACE ORDER
app.post('/order', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.send("Order Placed");
});

// 🚀 START SERVER
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});