const db_url = require('./configs.js').dbURL;
const mongoClient = require('mongodb').MongoClient;

export class Counters {
  static async getNext(sequenceName) {
    let next;
    await mongoClient.connect(db_url, (error, client) => {
      next = client
        .db(dbName)
        .collection(animalsCollectionName)
        .find({ _id: sequenceName });
    });
    return next++;
  }
}