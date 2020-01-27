const mongoose = require('mongoose');
const dbOptions = require('../utils/configs.js').dbOptions;
const connectionURI = require('../utils/configs.js').connectionURI;

mongoose.connect(connectionURI, dbOptions);

mongoose.connection.dropDatabase().then(() => {
  console.log('---DB dropped---');
});

setTimeout(() => {
  require('../json-db/init/read-animals.js');
  require('../json-db/init/read-happy-stories.js');
  require('../json-db/init/read-news.js');
  require('../json-db/init/read-supplies.js');
}, 3000);

mongoose.connection.close();
console.log('---init finished---');