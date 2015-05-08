var mongoose = require('mongoose');

// connect to mongodb
var db = mongoose.connection;
db.on('error', console.error);
mongoose.connect('mongodb://localhost:27017/Lab_9');

exports.mongoose = mongoose;
exports.db = db;