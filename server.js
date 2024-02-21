// const connection = createConnection({
//   host: "localhost",
//   user: "telemart_host",
//   password: "Telemart@321",
//   database: "teleinc_adminpanel",
// });

const express = require("express");
const mysql = require("mysql2/promise"); // Import mysql2/promise

const app = express();

// MySQL Connection
const pool = mysql.createPool({
  host: "localhost",
  user: "telemart_host",
  password: "Telemart@321",
  database: "teleinc_adminpanel",
});

// Route to fetch data from MySQL
app.get("/data", async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query(
      "SELECT * FROM count_order_tbl"
    );
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
