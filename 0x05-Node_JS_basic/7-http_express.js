const express = require('express');
const students = require('./3-read_file_async');
const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is a list of our students\n');
  await students(process.argv[2]).then((data) => {
    res.write(`Number of students: ${data.students.length}\n`);
    res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
    res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
    res.end();
  }).catch((error) => {
    res.statusCode = 500;
    res.send(error.message);
  })
});

app.listen(1245, '127.0.0.1');

module.exports = app;
