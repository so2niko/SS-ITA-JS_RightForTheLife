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
  const report = {
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  };
  const newReport = new ReportModel(report);
  newReport.save()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
  res.status(200).json({ message: 'reports POST', report });

});

router.put('/:reportID', (req, res, next) => {
  const reportId = req.params.reportID;
  res.status(200).json({ reportId, message: 'reports PUT' });

});

router.delete('/:reportID', (req, res, next) => {
  const reportId = req.params.reportID;
  res.status(200).json({ message: 'reports DELETE', reportId });
});

module.exports = router;