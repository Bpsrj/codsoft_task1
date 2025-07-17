const cors = require('cors');
app.use(cors());

document.getElementById('signupForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const password = this.password.value;

  const res = await fetch('http://localhost:3000/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();
  if (res.ok) {
    document.getElementById('responseMsg').textContent = 'Signup successful!';
  } else {
    document.getElementById('responseMsg').textContent = data.message || 'Server error';
  }
});
