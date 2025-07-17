function generateQRCode() {
  const text = document.getElementById("text").value.trim();
  const qrContainer = document.getElementById("qrcode");

  qrContainer.innerHTML = "";

  if (!text) {
    showAlert("Please enter text or URL", "error");
    return;
  }

  try {
    new QRCode(qrContainer, {
      text: text,
      width: 200,
      height: 200,
      colorDark: "#000",
      colorLight: "#fff",
      correctLevel: QRCode.CorrectLevel.H
    });

    showAlert("QR Code generated successfully!", "success");
  } catch (error) {
    showAlert("Failed to generate QR Code. Please try again.", "error");
    console.error("QR Code Generation Error:", error);
  }
}

function showAlert(message, type) {
  const alertBox = document.createElement("div");
  alertBox.textContent = message;
  alertBox.style.padding = "10px";
  alertBox.style.marginTop = "10px";
  alertBox.style.borderRadius = "5px";
  alertBox.style.textAlign = "center";
  alertBox.style.color = "#fff";
  alertBox.style.backgroundColor = type === "success" ? "#4CAF50" : "#f44336";

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
  }, 3000);
}
