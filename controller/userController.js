// Controller for User logic

// GET /users -> Fetches all users
const getAllUsers = (req, res) => {
  res.send("Fetching all users");
};

// POST /users -> Adds a new user
const createUser = (req, res) => {
  res.send("Adding a new user");
};

// GET /users/:id -> Fetches a single user by their ID
const getUserById = (req, res) => {
  const { id } = req.params;
  res.send(`Fetching user with ID: ${id}`);
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
};