function validateForm() {
  // (Optional) Add your validation logic here

  // Prevent default form submission
  event.preventDefault();

  // Redirect to success page
  window.location.href = "success.html";
  return false;
}