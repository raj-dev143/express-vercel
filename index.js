// import express from "express";

// const app = express();
// const port = 9000;
// app.use("/", (req, res) => {
//   res.json({ message: "Hello From Express App" });
// });

// app.listen(9000, () => {
//   console.log(`Starting Server on Port ${port}`);
// });

const express = require("express");
const mysql = require("mysql");

const app = express();

// MySQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "telemart_host",
  password: "Telemart@321",
  database: "teleinc_adminpanel",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Your Express routes and middleware setup go here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
