const dbName = 'right-for-life';
const dbOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  dbName: dbName,
};

module.exports.dbName = dbName;
module.exports.dbURL = `mongodb://localhost:27017/${dbName}`;
module.exports.animalsCollectionName = 'animals';
module.exports.serverPort = 4000;
module.exports.frontURL = 'http://localhost:5000';
module.exports.dbOptions = dbOptions;