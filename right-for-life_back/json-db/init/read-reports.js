const mongoose = require('mongoose');
const fs = require('fs');
const dbOptions = require('../../utils/configs.js').dbOptions;
const connectionURI = require('../../utils/configs.js').connectionURI;
const ReportsSchema = require('../../models/ReportsSchema.js');

initReports();

function readReports() {
  return fs.readFileSync('./json-db/reports.json', 'utf8');
}

function getConnection() {
  return mongoose.createConnection(connectionURI, dbOptions);
}

function initReports() {
  const connection = getConnection();
  const ReportsModel = connection.model('Reports', ReportsSchema);
  ReportsModel.insertMany(extractedReports(ReportsModel))
    .then(() => {
      console.log('Reports collection created');
      connection.close();
    })
    .catch(err => console.log('save error\n' + err));
}

function extractedReports(Reports) {
  const reportsContent = JSON.parse(readReports());
  const newReports = [];
  for (reports of reportsContent) {
    newReports.push(new Reports({
      _id: new mongoose.Types.ObjectId(),
      date: reports.date,
      title: reports.title,
      photo: reports.photo,
      text: reports.text,
    }));
  }
  return newReports;
}

module.exports = initReports;