const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "pengelolaan_keuangan",
});

exports.query = async (sql, values = []) => {
  try {
    const koneksi = await pool.getConnection();
    const barisData = await koneksi.query(sql, values);
    koneksi.release();
    return barisData;
  } catch (error) {
    throw error;
  }
};
