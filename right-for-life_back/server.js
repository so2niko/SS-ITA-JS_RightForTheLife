const express = require('express');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;

const Animal = require('./shemas/Animal.js').Animal;
const serverPort = require('./utils/configs.js').serverPort;

const app = express();

const jsonParser = express.json;

//enable CORS
app.use(cors());

// app.get('/', function (req, res) {
//   res.send(animals);
// });

app.get('/animals', (request, response) => {
  Animal.find((err, docs) => {
    err ? console.log(err) : response.status(200).json(docs);
  });
});

app.post('/animals', jsonParser(), (request, response) => {
  console.log(request);
  const animal = new Animal({
    name: request.body.name,
    type: request.body.type,
    gender: request.body.gender,
    age: request.body.age,
  });
  animal.save(err => {
    if (!err) {
      response.status(200).json(animal);
    } else {
      console.log(err);
    }
  });
});

app.delete('/animals', jsonParser(), (request, response) => {
  console.log(request.body);
  Animal.deleteOne({ _id: ObjectId(request.body._id) }, (err, result) => {
    console.log(result);
    Animal.find((err, docs) => {
      response.status(200).json(docs);
    });
  });
});

app.get('/query', (request, response) => {
  let id = request.query.id;
  let userName = request.query.name;
  response.send('<h1>Информация</h1><p>id=' + id + '</p><p>name=' + userName + '</p>');
});

app.listen(serverPort, () => {
  console.log('Example app listening on port %s!', serverPort);
});