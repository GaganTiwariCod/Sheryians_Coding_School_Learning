const app = require('./src/app');
const express = require('express');
const connectDB = require('./src/db/db');

connectDB();

app.use(express.json());


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});