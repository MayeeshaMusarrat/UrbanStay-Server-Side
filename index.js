const express = require('express');
const app = express();
var mysql = require('mysql2');
const cors = require('cors');
app.use(cors(), express.json());


const pool = mysql.createPool({
  host: "mysql-264db198-musarratmayeesha-0001.a.aivencloud.com",
  port: 16798,
  user: "avnadmin",
  password: "AVNS_TvZaCuiGGGrRVds4PvY",
  database: "defaultdb",
});


const port = 5001;

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
  } else {
    console.log("Connected to database!");
    connection.release(); 
    connectAndStartServer().catch(err => {
      console.error(err);
    });
  }
});

async function connectAndStartServer() 
{
  app.listen(5001, () => {
    console.log(`Example app listening on port 5001`);
  });
}




