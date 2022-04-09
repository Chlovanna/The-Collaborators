const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole = () => "Engineer";
  getGithub = () => "Chlovanna";
}

module.exports = Engineer;
