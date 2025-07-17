const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  // Yahan aap database me save kar sakte hain
  // Filhal ke liye success response bhej rahe hain
  if (name && email && password) {
    res.json({ message: 'Signup successful!' });
  } else {
    res.status(400).json({ message: 'All fields are required.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});