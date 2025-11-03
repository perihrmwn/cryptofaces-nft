const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use('/.well-known', express.static(path.join(__dirname, '.well-known')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 CryptoFaces NFT running on port ${PORT}`);
});