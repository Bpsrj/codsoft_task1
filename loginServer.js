const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch'); // npm install node-fetch
const app = express();
const PORT = 5000;


mongoose.connect('mongodb://127.0.0.1:27017/graduate_portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


const User = mongoose.model('User', new mongoose.Schema({
  email: String,
  password: String
}));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send(`  `);
});


app.post('/api/login', async (req, res) => {
  const { email, password, code } = req.body;

  // Simple demo validation
  if (!email || !password || !code) {
    return res.json({ success: false, message: "All fields are required." });
  }
  if (code !== "8Ad4F") {
    return res.json({ success: false, message: "Invalid verification code." });
  }

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.json({ message: 'Invalid Credentials' });
  }

  res.json({ message: 'Login Successful!' });
});


app.post('/login', async (req, res) => {
  const { email, password, code, captcha } = req.body;

  // Verify captcha
  const secretKey = '6Le2Sm8rAAAAAE7oQ87w6PQjo0O6T1BC6gwAmqA0';
  const captchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;
  const captchaRes = await fetch(captchaVerifyUrl, { method: 'POST' });
  const captchaJson = await captchaRes.json();
  if (!captchaJson.success) {
    return res.json({ success: false, message: "Captcha verification failed." });
  }

  // Simple demo validation
  if (!email || !password) {
    return res.json({ success: false, message: "All fields are required." });
  }

  // ...your user validation logic...

  res.json({ success: true, message: 'Login Successful!' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
