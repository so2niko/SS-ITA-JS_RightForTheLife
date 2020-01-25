const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const animalRoutes = require('./routes/animalRoutes.js');
const mongoose = require('mongoose');
const dbOptions = require('./utils/configs.js').dbOptions;

const app = express();

mongoose
  .connect(`mongodb+srv://root:${process.env.DB_PASS}@animalsforlife-goij5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    dbOptions)
  .catch(err => {
    console.log(err);
  });

app.use(morgan(('dev')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    return res.status(200).json({});
  }
  next();
});

app.use('/animals', animalRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found!');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: { message: error.message, status: error.status } });
});

module.exports = app;