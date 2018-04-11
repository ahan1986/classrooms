// requiring the classroom constructor in our classroom.js
var Classroom = require('./Classroom');

//creating and store a new classroom object
var firstClass = new Classroom("Sam", 2149);

//calling the addStudent method on our firstClass object
firstClass.addStudent("Jack", "coding", 4.0);

console.log(firstClass);