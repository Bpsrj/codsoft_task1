document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const userCode = this.code.value;
  const responseMsg = document.getElementById('responseMsg');

  // Check verification code
  if (userCode !== currentCode) {
    responseMsg.style.color = "red";
    responseMsg.textContent = "Invalid verification code.";
    return;
  }

  // Check reCAPTCHA
  const captchaResponse = grecaptcha.getResponse();
  if (!captchaResponse) {
    responseMsg.style.color = "red";
    responseMsg.textContent = "Please complete the captcha.";
    return;
  }

  const email = this.email.value;
  const password = this.password.value;

  responseMsg.style.color = "#2563eb";
  responseMsg.textContent = "Logging in...";

  try {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, code: userCode, captcha: captchaResponse })
    });
    const data = await res.json();
    if (data.success) {
      responseMsg.style.color = "green";
      responseMsg.textContent = "Login successful!";
      // Example: Redirect after login
      // window.location.href = "dashboard.html";
    } else {
      responseMsg.style.color = "red";
      responseMsg.textContent = data.message || "Login failed!";
    }
  } catch (err) {
    responseMsg.style.color = "red";
    responseMsg.textContent = "Server error. Please try again.";
  }
});

// Generate and refresh verification code
let currentCode = '';

function generateCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  currentCode = Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  document.getElementById('generatedCode').textContent = currentCode;
}

// Initial generation and refresh setup
generateCode();
document.getElementById('refreshCode').addEventListener('click', generateCode);

// Forgot Password button
document.getElementById('forgotBtn').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Forgot Password functionality coming soon!');
});

// Sign Up button
document.getElementById('signupBtn').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Sign Up functionality coming soon!');
});

