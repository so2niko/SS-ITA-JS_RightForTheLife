const mongoose = require('mongoose');
const fs = require('fs');
const dbOptions = require('../../utils/configs.js').dbOptions;
const AnimalSchema = require('../../models/animalModel.js');
const dbName = require('../../utils/configs.js').dbName;

const connectionURI = `mongodb+srv://root:root@animalsforlife-goij5.mongodb.net/${dbName}?retryWrites=true&w=majority`;
// let animalsBool = false;

initAnimals();

// checkAnimalsCollection();
// if (!animalsBool) initAnimals();

function readAnimals() {
  console.log(process.cwd());
  return fs.readFileSync('../json-db/animals.json', 'utf8');
}

function getConnection() {
  return mongoose.createConnection(connectionURI, dbOptions);
}

//TBD later, maybe
// function checkAnimalsCollection() {
//   const conn = getConnection();
//   // const coll = conn.collection('animals');
//   // console.log(coll);
//   console.log(conn);
//   // console.log('Animals collections not exist');
//   // console.log('Animals collection exists');
//   conn.close();
// }

function initAnimals() {
  const connection = getConnection();
  const animalModel = connection.model('Animal', AnimalSchema);
  animalModel.insertMany(extractedAnimals(connection))
    .then(() => {
      console.log('Animals collection created');
      connection.close();
    })
    .catch(err => console.log('save error\n' + err));
}

function extractedAnimals(connection) {
  const animalsContent = JSON.parse(readAnimals());
  const newAnimals = [];
  const Animal = connection.model('Animal', AnimalSchema);
  for (animal of animalsContent) {
    newAnimals.push(new Animal({
      _id: new mongoose.Types.ObjectId(),
      name: animal.name,
      type: animal.type,
      gender: animal.gender,
      age: animal.age,
      photos: animal.photos,
      description: animal.description,
    }));
  }
  return newAnimals;
}

module.exports = initAnimals;