const generateBtn = document.querySelector('.generate-btn');
const downloadBtn = document.querySelector('.download-btn');
const qrCodeDiv = document.getElementById('qr-code');
const inputText = document.getElementById('input-text');
const sizeSelector = document.getElementById('sizes');
let qr;

generateBtn.addEventListener('click', () => {
  const text = inputText.value.trim();
  const size = sizeSelector.value;

  if (!text) {
    alert('Please enter a valid URL or text!');
    return;
  }

  qrCodeDiv.innerHTML = '';
  qr = new QRCode(qrCodeDiv, {
    text: text,
    width: size,
    height: size,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
});

downloadBtn.addEventListener('click', () => {
  if (!qr) {
    alert('Generate the QR code first!');
    return;
  }

  const img = qrCodeDiv.querySelector('img') || qrCodeDiv.querySelector('canvas');

  if (img) {
    const link = document.createElement('a');
    link.href = img.src || img.toDataURL();
    link.download = 'qr-code.png';
    link.click();
  }
});
