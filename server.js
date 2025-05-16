const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

let boostCount = 0;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/api/boosts', (req, res) => {
  res.json({ count: boostCount });
});

app.post('/api/boosts', (req, res) => {
  boostCount++;
  res.json({ message: 'Boosted!', count: boostCount });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
