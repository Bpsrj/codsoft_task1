const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/graduate_portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String,
  password: String
}));

app.use(cors());
app.use(express.json());

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ success: false, message: "All fields are required." });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.json({ success: false, message: "User already exists." });
  }

  const newUser = new User({ name, email, password });
  await newUser.save();
  res.json({ success: true, message: "Signup successful." });
});

app.listen(PORT, () => {
  console.log(`Signup server running at http://localhost:${PORT}`);
});
