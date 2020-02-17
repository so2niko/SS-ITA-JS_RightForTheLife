const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const HappyStoryScheme = require('../models/HappyStorySchema.js');
const HappyStoryModel = mongoose.connection.model('HappyStory', HappyStoryScheme);

router.get('/', (req, res, next) => {
  HappyStoryModel.find()
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/:happyStoryID', (req, res, next) => {
  HappyStoryModel.findById(new mongoose.Types.ObjectId(req.params.happyStoryID))
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
  const { date, title, photo, text } = req.body;

  new HappyStoryModel({ _id: new mongoose.Types.ObjectId(), date, title, photo, text })
    .save()
    .then(story => {
      res.status(200).json(story);
    })
    .catch(err => {
      console.log(err);
    });

});

router.put('/:happyStoryID', (req, res, next) => {
  const { date, title, photo, text } = req.body;

  HappyStoryModel.findById(new mongoose.Types.ObjectId(req.params.happyStoryID))
    .exec()
    .then(story => {
      story.date = date;
      story.title = title;
      story.photo = photo;
      story.text = text;
      story.save()
        .then(() => {
          res.status(200).json(story);
        })
        .catch(err => {
          console.log(err);
        });
    });
});

router.delete('/:happyStoryID', (req, res, next) => {
  HappyStoryModel.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.happyStoryID) })
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      console.log(err);
    });

});

module.exports = router;