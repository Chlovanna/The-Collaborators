const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = UNC;
  }
  getRole = () => "Intern";
  getSchool = () => "UNC";
}
