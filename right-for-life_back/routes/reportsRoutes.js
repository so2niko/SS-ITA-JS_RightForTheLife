const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ReportScheme = require('../models/ReportSchema.js');
const ReportModel = mongoose.connection.model('Report', ReportScheme);

router.get('/', (req, res, next) => {
  ReportModel.find()
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    });
});

router.get('/:reportID', (req, res, next) => {
  console.log(req.params.reportID);
  ReportModel.findById(new mongoose.Types.ObjectId(req.params.reportID))
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
  new ReportModel({ _id: new mongoose.Types.ObjectId(), date, title, gallery })
    .save()
    .then(report => {
      res.status(200).json(report);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put('/:reportID', (req, res, next) => {
  const { date, title, gallery } = req.body;
  ReportModel.findById(new mongoose.Types.ObjectId(req.params.reportID))
    .exec()
    .then(report => {
      report.date = date;
      report.title = title;
      report.gallery = gallery;
      report.save()
        .then(() => {
          res.status(200).json(report);
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
});

router.delete('/:reportID', (req, res, next) => {
  ReportModel.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.reportID) })
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;