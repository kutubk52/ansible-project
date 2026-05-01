const express = require('express');
const { Client } = require('pg');

const app = express();

const client = new Client({
  host: process.env.DB_HOST,
  user: 'appuser',
  password: 'apppass',
  database: 'appdb'
});

client.connect();

app.get('/', async (req, res) => {
  const result = await client.query('SELECT NOW()');
  res.send(`DB Time: ${result.rows[0].now}`);
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
