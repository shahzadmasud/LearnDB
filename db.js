var mongo = require('mongoose')
mongo.connect('mongodb://localhost/test');

module.exports = mongo.connection;
