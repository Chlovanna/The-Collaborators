const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.github = Chlovanna;
  }
  getRole = () => "Engineer";
  getGithub = () => "Chlovanna";
}
