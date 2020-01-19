const express = require('express');
const fs = require('fs');
const cors = require('cors');
const mongoClient = require('mongodb').MongoClient;

const dbName = 'right-for-life';
const animalsCollectionName = 'animals';
const db_url = 'mongodb://localhost:27017';

const app = express();
const port = 4000;

//enable CORS
app.use(cors());

// app.get('/', function (req, res) {
//   res.send(animals);
// });

app.get('/animals', (request, response) => {
  mongoClient.connect(db_url, function (err, client) {
    if (err) {
      return console.error(err);
    }
    client
      .db(dbName)
      .collection(animalsCollectionName)
      .find()
      .toArray((err, result) => {
        // console.log(result);
        response.send(result.filter((x) => {
          return x.type === 'пес';
        }));
        client.close();
      });
  });
});

app.get('/query', (request, response) => {
  let id = request.query.id;
  let userName = request.query.name;
  response.send('<h1>Информация</h1><p>id=' + id + '</p><p>name=' + userName + '</p>');
});

app.listen(port, function () {
  console.log('Example app listening on port %s!', port);
});