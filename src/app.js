import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'

const app = express()

app.get('/api', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM students WHERE id='+req.query.studentId+';') 
  res.json(rows[0]);  
  console.log("Given data: " +JSON.stringify(rows[0]));
})

app.listen(PORT);
console.log('Server on port', PORT)