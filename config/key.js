// keys.js
require("dotenv").config(); // Load environment variables from .env file

module.exports = {
  MongoURI: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@node-db.rrn5dry.mongodb.net/node-db?retryWrites=true&w=majority`,
};
