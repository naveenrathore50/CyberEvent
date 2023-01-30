var mysql = require('mysql');


var pool = mysql.createPool({
  connectionLimit:4,
  host: "sql12.freemysqlhosting.net",
  user: "sql12594296",
  password: "Ds7uaszXyX",
  database:"sql12594296"
});

pool.getConnection((err,connection)=> {
  if(err)
  throw err;
  console.log('Database connected successfully');
  connection.release();
});
module.exports = pool;