const functions = require('firebase-functions');
const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect();

exports.addBook = functions.https.onRequest((req, res) => {
  const book = req.body;

  if (!book.title || !book.author || !book.isbn || !book.published_date) {
    return res.status(400).json({ error: 'Invalid book data' });
  }

  const sql = 'INSERT INTO books (title, author, isbn, published_date, created_at) VALUES (?, ?, ?, ?, Now())';
  const values = [book.title, book.author, book.isbn, book.published_date];
  
  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error('Error adding book to database:', error);
      return res.status(500).json({ error: 'Failed to add book to database' });
    }
    
    return res.status(200).json(book);
  });
});
