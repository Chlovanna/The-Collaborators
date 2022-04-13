const teamMembers = [];
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateHTML = require("./src/Template");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateCode = require("./src/Template");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const promptCard = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "card",
        message: "What would you like to do?",
        choices: [
          "add a manager",
          "add an engineer",
          "add an intern",
          "Please build your team",
        ],
      },
    ])
    .then(({ card }) => {
      if (card === "add an engineer") promptEngineer();
      else if (card === "add a manager") promptManager();
      else if (card === "add an intern") promptIntern();
      // else generateHTML();
      else {
        fs.writeFile("./team.html", generateHTML(teamMembers), (err) => {
          if (err) throw new Error(err);
        });
      }
    });
};

const promptManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Enter your name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Id",
        message: "Enter your  ID",
        validate: (Id) => {
          if (Id) {
            return true;
          } else {
            console.log("Enter your ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Enter your address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter your office number",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Enter your office number");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.Id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
    })
    .then(promptCard);
};

const promptEngineer = () => {
  console.log(`ADD NEW ENGINEER`);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Enter your name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Id",
        message: "Enter your ID",
        validate: (Id) => {
          if (Id) {
            return true;
          } else {
            console.log("Enter your ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email addreess",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Enter your address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter your Github username",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Enter your Github username");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.Id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
    })
    .then(promptCard);
};

const promptIntern = () => {
  console.log(`ADD NEW INTERN`);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your intern's name?",
        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log("Enter your name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Id",
        message: "Enter your ID",
        validate: (Id) => {
          if (Id) {
            return true;
          } else {
            console.log("Enter your ID");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "email",
        message: "Enter your email addreess",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Enter your address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter your school name",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Enter your school's name");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.Id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
    })
    .then(promptCard);
};
// const completeTeam = () => {
//   console.log(`Completed!`);
// };

promptCard();
