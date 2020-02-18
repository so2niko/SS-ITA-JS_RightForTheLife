const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const NewsScheme = require('../models/NewsSchema.js');
const NewsModel = mongoose.connection.model('News', NewsScheme);

router.get('/', (req, res, next) => {
  const pagination = { page: 1, limit: 10 };
  const { page, limit } = req.query;

  page ? pagination.page = page : '';
  limit ? pagination.limit = limit : '';

  NewsModel
    .paginate({}, pagination)
    .then(doc => {
      res.status(200).json(doc);
    });
});

router.get('/:newsID', (req, res, next) => {
  NewsModel.findById(new mongoose.Types.ObjectId(req.params.newsID))
    .exec()
    .then(news => {
      if (news)
        res.status(200).json(news);
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

  new NewsModel({ _id: new mongoose.Types.ObjectId(), date, title, photo, text })
    .save()
    .then(news => {
      res.status(200).json(news);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put('/:newsID', (req, res, next) => {
  const { date, title, photo, text } = req.body;

  NewsModel.findById(new mongoose.Types.ObjectId(req.params.newsID))
    .exec()
    .then(news => {
      news.date = date;
      news.title = title;
      news.photo = photo;
      news.text = text;
      news.save()
        .then(() => {
          res.status(200).json(news);
        })
        .catch(err => {
          console.log(err);
        });
    });
});

router.delete('/:newsID', (req, res, next) => {
  NewsModel.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.newsID) })
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;