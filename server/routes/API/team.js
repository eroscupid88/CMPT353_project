const express = require("express");
const router = express.Router();
const mysql = require("mysql");

router.get("/team", (req, res) => {
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3307,
    database: "team",
    password: "project",
  });
  // Connect to database
  con.connect((err) => {
    if (err) throw err;
    console.log("MySQL Database Connected!");
  });

  let sql = "SELECT * FROM members ORDER BY id";
  con.query(sql, (err, data) => {
    if (err) throw err;
    res.json(data);
  });

  con.end();
});

module.exports = router;
