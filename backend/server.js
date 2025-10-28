const express = require('express');
const cors = require('cors'); // <-- thêm dòng này
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); // <-- bật CORS cho toàn bộ request

// 🔹 import routes
const userRoutes = require('./routes/user');
app.use('/', userRoutes); // <-- rất quan trọng

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
