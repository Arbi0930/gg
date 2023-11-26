const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors')
// 
// Body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// TODO : mongodb+srv://nomio:0710@coffeeshop.db2nh7y.mongodb.net/?retryWrites=true&w=majority
// MongoDB Connection
mongoose.connect("mongodb+srv://nomio:0710@coffeeshop.db2nh7y.mongodb.net/?retryWrites=true&w=majority", {
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
  imgUrl: String,
});

const Product = mongoose.model('Product', ProductSchema);
const OrderSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  totalPrice: Number,
  customerName: String,
  // Add other relevant fields
});

const Order = mongoose.model('Order', OrderSchema);


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
  const { name, price, category, imgUrl } = req.body; // req.body-аас imgUrl-г задлах
  const newProduct = new Product({ name, price, category, imgUrl });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/api/checkout', async (req, res) => {
  const { products, totalPrice, customerName } = req.body;
  // Шинэ ORder Document 
  const newOrder = new Order({
    products,
    totalPrice,
    customerName,
    // Add other relevant fields
  });
  // Төлбөрийн API үйлдэл
  try {

    const orderDetails = req.body;
    const savedOrder = await newOrder.save();

    // Захиалгын дэлгэрэнгүй мэдээллийг мэдээллийн санд хадгалах гэх мэт тооцоо хийх логикоо энд хийнэ

    res.status(200).json({ message: 'Амжилттай төлөгдлөө', orderDetails });
  } catch (error) {
    res.status(500).json({ message: 'Амжилтгүй боллоо', error: error.message });
  }
});
// Сервер асахад
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
