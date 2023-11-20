import { createPool } from 'mysql2/promise';


// create the connection to database
export const pool = createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password:'',
  database: 'test'
});