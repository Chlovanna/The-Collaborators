const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const teamMembers = [];
const generateCode = require("./src/generateCode");
const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "imput",
        name: "name",
        message: "What is your name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "imput",
        name: "employeeId",
        message: "Enter your employee ID",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "imput",
        name: "email",
        message: "Enter your employee ID",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "imput",
        name: "officeNumber",
        message: "Enter your employee ID",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.employeeId,
        answers.email,
        anwers.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
};

const promptMenu = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "menu",
      message: "Please select your next option",
      choices: ["add an engineer", "add an intern", "add other team members"],
    }
  ]).then(teamChoice => {
      if (teamChoice.menu === "add an engineer") console.log("engineer");
      else if (teamChoice.menu ="add an intern") console.log ("intern");
      else  console.log("other team members");
          
      }

  });
};
