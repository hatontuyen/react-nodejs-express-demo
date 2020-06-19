
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: 'test',
  database: 'demo'
});
connection.connect();
const getConnection = () => {
  return connection;
}
const endConnection = () => {
  connection.end();
}

module.exports = {
  getConnection, endConnection
}