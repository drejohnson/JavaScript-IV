// CODE here for your Lambda Classes

class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs)
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs)
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
  }
  listsSubjects() {
    return this.favSubjects.map(subject => subject)
  }
  prAssignment(subject) {
    return `${student.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

class ProjectManager extends Instructor {
  constructor(attrs) {
    super(attrs)
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

// Testing
const tyrion = new Instructor({
  name: 'Tyrion',
  location: 'Kings landing',
  age: 37,
  specialty: 'Back-end',
  favLanguage: 'Rust',
  catchPhrase: `A Lannister pays his debts`
});

const sam = new ProjectManager({
  name: 'Sam',
  location: 'Winterfell',
  age: 25,
  gradClassName: 'Computer Science for Maesters',
  favInstructor: 'Tyrion',
});

const poddrick = new Student({
  name: 'Poddrick',
  location: 'Kings landing',
  age: 22,
  className: 'JavaScript IV',
  favSubjects: ['JavaScript', 'Responsive Design', 'Preprocessors'],
});

// Instructor
console.log(tyrion.name)
console.log(tyrion.specialty)
console.log(tyrion.demo('ES6 Classes'))
console.log(tyrion.grade(poddrick, 'ES6 Classes'))
// Project Manager
console.log(sam.name)
console.log(sam.gradClassName)
console.log(sam.debugsCode(poddrick, 'Preprocessor II'))
// studdent
console.log(poddrick.name)
console.log(poddrick.favSubjects)
console.log(poddrick.className)
