function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    return this.subject = subjectName;
}
  
Student.prototype.addMarks = function(...marksToAdd) {
    if (this.marks) {
    // if (this.hasOwnProperty('marks')) {
        this.marks.push(...marksToAdd);
    }
}

let ann = new Student('Ann', 'female', 21);
let john = new Student('John', 'male', 19);
let jane = new Student('Jane', 'female', 20);
console.log(ann);
console.log(john);
console.log(jane);

ann.setSubject('philisophy');
john.setSubject('math');
john.addMarks(4, 5, 4, 3);
ann.addMarks(5, 5, 4, 5);
console.log(ann);
console.log(john);
  
 Student.prototype.getAverage = function() {
    if (!this.marks || this.marks.length === 0) {
    // if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
        return 0;
    }
    let result = this.marks.reduce((sum, current) => sum + current, 0) / this.marks.length;
    return +(result.toFixed(1));
}
  
Student.prototype.exclude = function(reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}

console.log(ann.getAverage());
console.log(jane.getAverage());
  
john.exclude('прогулы');
console.log(john);

console.log('\n');
  
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
  
console.log('\n');
  
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);
