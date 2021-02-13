const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParse: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established correctly.');
});

const usersRouter = require('./routes/users');
const matchRouter = require('./routes/match');

app.use('/users', usersRouter);
app.use('/match', matchRouter);

app.listen(port, () => {
  console.log(`server is working on port ${port}`);
});
