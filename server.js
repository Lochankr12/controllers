// server.js
const express = require('express');

// Import the route modules
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// A simple home route
app.get('/', (req, res) => {
  res.send('Welcome to the Node-Mart E-Commerce API!');
});

// Mount the routers
// Any request to /users will be handled by userRoutes
app.use('/users', userRoutes);

// Any request to /products will be handled by productRoutes
app.use('/products', productRoutes);

// Any request to /cart will be handled by cartRoutes
app.use('/cart', cartRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});