const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
