// creating a constructor function for individual students object
var Student = function(name, favSubject, GPA) {
    this.name = name;
    this.favoriteSubject = favSubject;
    this.gpa = GPA;
};

//exporting Student constructor
module.exports = Student;