const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // form reload ना हो

  const captchaToken = grecaptcha.getResponse(); // Get reCAPTCHA token

  if (!captchaToken) {
    alert("Please complete the captcha.");
    return;
  }

  const formData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
    captchaToken: captchaToken // send token to backend
  };

  try {
    const res = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await res.json();

    if (res.ok) {
      alert("✅ " + result.message);
      form.reset();
      grecaptcha.reset(); // reset captcha
    } else {
      alert("❌ " + result.message);
      grecaptcha.reset();
    }
  } catch (err) {
    alert("❌ Server error. Please try again.");
    grecaptcha.reset();
  }

  document.getElementById('responseMessage').textContent = "Thank you for contacting us!";
});
