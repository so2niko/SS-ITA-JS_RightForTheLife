const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const AboutScheme = require('../models/AboutSchema.js');
const AboutModel = mongoose.connection.model('About', AboutScheme);

router.get('/', (req, res, next) => {
  AboutModel.findOne()
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    });
});

router.put('/', (req, res, next) => {
  const { gallery, description, instagram, facebook, phone, email } = req.body;

  AboutModel.findOne()
    .exec()
    .then(about => {
      about.gallery = gallery;
      about.description = description;
      about.instagram = instagram;
      about.facebook = facebook;
      about.phone = phone;
      about.email = email;
      about.save()
        .then(() => {
          res.status(200).json(about);
        })
        .catch(err => {
          console.log(err);
        });
    });
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