interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Draco',
  lastName: 'Malfoy',
  age: 17,
  location: 'Slytherin'
}

const student2: Student = {
  firstName: 'Luna',
  lastName: 'Lovegood',
  age: 15,
  location: 'Ravenclaw'
}

const studentList: [Student, Student] = [student1, student2];
const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);
