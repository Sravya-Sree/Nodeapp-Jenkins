const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Node Team: Sravya Sree, Sai Akshitha, Nagaraju, Rahman');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});