// routes/cartRoutes.js
const express = require('express');
const router = express.Router();

// GET /cart/:userId - Fetch the cart for a specific user
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  res.send(`Fetching cart for user with ID: ${userId}`);
});

// POST /cart/:userId - Add a product to a user's cart
router.post('/:userId', (req, res) => {
  const { userId } = req.params;
  // In a real app, you would also get product data from the request body
  res.send(`Adding product to cart for user with ID: ${userId}`);
});

module.exports = router;