const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  user: "telemart_host",
  password: "Telemart@321",
  database: "teleinc_adminpanel",
  connectionLimit: 10,
});

pool.query(`select * from count_order_tbl`, function (err, result, fields) {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});
