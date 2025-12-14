const sql = require("mssql");

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

async function getItems() {
  const pool = await sql.connect(config);
  const result = await pool.request().query("SELECT * FROM Items");
  return result.recordset;
}

async function addItem(name) {
  const pool = await sql.connect(config);
  await pool.request()
    .input("Name", sql.NVarChar, name)
    .query("INSERT INTO Items (Name) VALUES (@Name)");
}

module.exports = { getItems, addItem };
