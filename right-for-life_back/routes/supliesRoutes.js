const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const SupplyScheme = require('../models/SupplySchema.js');
const SupplyModel = mongoose.connection.model('Supply', SupplyScheme);

router.get('/', (req, res, next) => {
  SupplyModel.find()
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    });
});

router.get('/:supplyID', (req, res, next) => {
  SupplyModel.findById(new mongoose.Types.ObjectId(req.params.supplyID))
    .exec()
    .then(doc => {
      if (doc)
        res.status(200).json(doc);
      else
        throw { status: 400, message: 'not found' };
    })
    .catch(err => {
      if (err.status === 400)
        res.status(400).json(err);
      else
        res.status(500).json(err);
    });
});

router.post('/', (req, res, next) => {
  const animal = {
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  };
  const newAnimal = new SupplyModel(animal);
  newAnimal.save()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
  res.status(200).json({ message: 'animals POST', animal });

});

router.put('/:animalID', (req, res, next) => {
  const animalId = req.params.animalID;
  res.status(200).json({ animalId, message: 'animals PUT' });

});

router.delete('/:animalID', (req, res, next) => {
  const animalId = req.params.animalID;
  res.status(200).json({ message: 'animals DELETE', animalId });
});

module.exports = router;