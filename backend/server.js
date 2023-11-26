const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect('mongodb+srv://nomio:0710@coffeeshop.db2nh7y.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

// ажилж байгаа эсэх лог
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB холбогдлоо!');
});


// MongoDB Schema & Model
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  // Өөр хэрэгтэй талбарууд
});

const Product = mongoose.model('Product', ProductSchema);

// API 
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/products', async (req, res) => {
  const { name, price, category } = req.body;
  const newProduct = new Product({ name, price, category });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Сервер асахад
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
