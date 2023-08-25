const http = require('http');
const students = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
      res.write('This is a list of our students\n');
      students(process.argv[2]).then((data) => {
        res.write(`Number of students: ${data.students.length}\n`);
        res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
        res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
        res.end();
      }).catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      })
  }
});

app.listen(1245, '127.0.0.1');

module.exports = app;
