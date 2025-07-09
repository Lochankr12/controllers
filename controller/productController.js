// Controller for Product logic

// GET /products -> Fetches all products
const getAllProducts = (req, res) => {
  res.send("Fetching all products");
};

// POST /products -> Adds a new product
const createProduct = (req, res) => {
  res.send("Adding a new product");
};

// GET /products/:id -> Fetches a single product by its ID
const getProductById = (req, res) => {
  const { id } = req.params;
  res.send(`Fetching product with ID: ${id}`);
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
};