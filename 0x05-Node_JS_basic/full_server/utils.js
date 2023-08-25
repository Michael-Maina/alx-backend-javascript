import fs from 'fs';

async function countStudents(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    const students = data.split('\r\n')
          .slice(1)
          .map((student) => student.split(','))
          .map((student) => ({
            firstName: student[0],
            lastName: student[1],
            age: student[2],
            field: student[3]
    }));

    let fields = students.map((student) => student.field);
    let majors = new Set(fields);
    let majorStudents = {};

    for (let major of majors) {
      majorStudents[major] = [students.filter((student) => student.field === major)];
    }
    console.log(majorStudents);
    return majorStudents;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.export = countStudents;
