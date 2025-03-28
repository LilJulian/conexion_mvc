import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "julianDaraque",
  password: "Julidar123",
  database: "node_adso2894667"
});

export default connection;