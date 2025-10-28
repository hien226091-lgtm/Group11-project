// controllers/userController.js
let users = [
  { id: 1, name: "Vy", email: "vy@gmail.com" },
  { id: 2, name: "Linh", email: "linh@gmail.com" }
];

// GET /users
exports.getUsers = (req, res) => {
  res.json(users);
};

// POST /users
exports.createUser = (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
};
