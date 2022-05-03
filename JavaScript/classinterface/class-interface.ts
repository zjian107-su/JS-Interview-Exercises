import { Human } from "./human";

class Person implements Human {
  firstName: string;
  lastName: string;
  middleName: string; // as long as it implemented Human's attribute

  constructor(firstName: string, lastName: string, middleName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
  }
}

let personA = new Person("Daniel", "Jiang", "Nabi");

console.table(personA);

class Student extends Person {
  // extends
  grade: number;

  constructor(
    firstName: string,
    lastName: string,
    middleName: string,
    grade: number
  ) {
    super(firstName, lastName, middleName);
    this.grade = grade;
  }
}
