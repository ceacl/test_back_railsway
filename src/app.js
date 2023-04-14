import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'
import cors from 'cors';

const app = express()

app.get('/api', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM students WHERE id='+req.query.studentId+';') 
  res.set('Access-Control-Allow-Origin', '*');
  res.json(rows[0]);  
  console.log("Given data: " +JSON.stringify(rows[0]));
})

app.get('/',  async (req, res) => {
  res.send("HelloWorld");
  console.log("Hellow!")
})


app.use(cors());
app.use(cors({
  origin: '*'
}));

app.listen(PORT);
console.log('Server on port', PORT)