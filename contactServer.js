const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/contactForm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Schema
const Contact = mongoose.model('Contact', {
  name: String,
  email: String,
  subject: String,
  message: String
});

// POST route with captcha verification
app.post("/contact", async (req, res) => {
  const { name, email, subject, message, captchaToken } = req.body;

  if (!captchaToken) {
    return res.status(400).json({ message: "Captcha is required" });
  }

  const secretKey = "6LfFlW4rAAAAAIH9yfVQQj_0OqAAY1AL4Mf3n-t6";

  try {
    // Verify captcha with Google
    const googleRes = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: captchaToken,
        },
      }
    );

    if (googleRes.data.success) {
      await Contact.create({ name, email, subject, message });
      return res.json({ message: "Message sent successfully!" });
    } else {
      return res.status(400).json({ message: "CAPTCHA verification failed" });
    }
  } catch (error) {
    console.error("❌ Error:", error);
    return res.status(500).json({ message: "Server error. Please try again." });
  }
});

// Test GET route
app.get('/', (req, res) => {
  res.send('✅ Contact Server is running');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
