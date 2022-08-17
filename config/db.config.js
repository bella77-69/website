const mysql = require("mysql");
require("dotenv").config()

const HOST = process.env.HOST
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const DATABASE = process.env.DATABASE

let dbConn = null;
function handleDisconnect() {
  dbConn = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    use: 'b09844508cb47a',
    password: '24216c2a',
    database: 'heroku_bcd43557b2a1ae0'
  });


  dbConn.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  dbConn.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}
handleDisconnect();
setInterval(function () {
  dbConn.query("SELECT 1");
}, 8000);

module.exports = dbConn;
