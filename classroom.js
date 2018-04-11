// requiring the Student module to be exported from student.js
var Student = require('./student.js');

//creating a constructor function for creating a classroom objects
var Classroom = function(professor, room) {
    this.students = [];
    this.professor = professor;
    this.roomNum = roomNum;
}

//creating a method that creats a student using our constructor.  It will push the new student object to this.students and updates this.numStudents
this.addStudent = function(name, favSubject, GPA) {
    this.students.push(new Student(name, favSubject, GPA));
}
// this method will display how many students there are in the class
this.studentCount = function() {
    return this.students.length;
}

// exporting this constructor function that main.js will require
module.exports = Classroom;