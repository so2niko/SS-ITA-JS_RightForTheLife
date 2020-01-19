const dbUrl = require('./configs.js').dbURL;
console.log('wip on init script');

const MongoClient = require('mongodb').MongoClient;

const db = new MongoClient(dbUrl);
if (db) {
  console.log('db exists');
}