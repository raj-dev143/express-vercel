// const connection = createConnection({
//   host: "localhost",
//   user: "telemart_host",
//   password: "Telemart@321",
//   database: "teleinc_adminpanel",
// });

import express from "express";
import { createConnection } from "mysql";

const app = express();

// MySQL Connection
const connection = createConnection({
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

// Route to display data from the count_order_tbl table
app.get("/orders", (req, res) => {
  connection.query(
    "SELECT product_name, idtag FROM count_order_tbl",
    (err, rows) => {
      if (err) {
        console.error("Error fetching data from count_order_tbl: ", err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.json(rows); // Assuming you want to return JSON data
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
