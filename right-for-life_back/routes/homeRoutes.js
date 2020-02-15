const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const HomeScheme = require('../models/HomeSchema.js');
const HomeModel = mongoose.connection.model('Home', HomeScheme);

const EmergencyScheme = require('../models/EmergencySchema.js');
const EmergencyModel = mongoose.connection.model('Emergency', EmergencyScheme);

const NewsScheme = require('../models/NewsSchema.js');
const NewsModel = mongoose.connection.model('News', NewsScheme);

router.get('/', (req, res, next) => {
  HomeModel.findOne()
    .exec()
    .then(doc => {
      // if (doc&&doc.emergencies) {
      //   EmergencyModel.findById(doc.emergencies);
      // }
      res.status(200).json(doc);
    });
});

router.put('/', (req, res, next) => {
  const { gallery, title, description } = req.body;
  HomeModel.findOne()
    .exec()
    .then(doc => {
      doc.gallery = gallery;
      doc.title = title;
      doc.description = description;
      doc.save().then(() => {
        res.status(200).json(doc);
      });
    });
});

router.put('/pin-emergencies', (req, res, next) => {
  const emergencyId = new mongoose.Types.ObjectId(req.body._id);

  HomeModel.findOne()
    .exec()
    .then(home => {
      EmergencyModel.findById(emergencyId)
        .exec()
        .then((emergency) => {
          home.emergencies = emergency;
          home.save()
            .then(() => {
              res.status(200).json(doc);
            });
        });
    });
});

router.put('/pin-news', (req, res, next) => {
  const newsId = new mongoose.Types.ObjectId(req.body._id);

  HomeModel.findOne()
    .exec()
    .then(home => {
      NewsModel.findById(newsId)
        .exec()
        .then((news) => {
          home.emergencies = news;
          home.save()
            .then(() => {
              res.status(200).json(doc);
            });
        });
    });
});

module.exports = router;