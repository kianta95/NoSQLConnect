const mongoose = require('mongoose')
const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://localhost:27017/NoSQLConnect';

connect(connectionString);

module.exports = connection;