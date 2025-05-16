const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

let boostCount = 0;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Get current boost count
app.get('/api/boosts', (req, res) => {
  res.json({ count: boostCount });
});

// Custom share endpoint (like trashy.theworkpc.com/api/share?type=facebook)
app.get('/api/share', (req, res) => {
  const type = req.query.type || 'unknown';
  boostCount++;
  console.log(`📣 Shared via: ${type}`);
  res.json({ message: `Shared via ${type}`, count: boostCount });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
