const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const teamMembers = [];

const promptManager = () => {
  return inquirer.prompt([
    {
      type: "imput",
      name: "name",
      message: "What is your name?"
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              return false
          }
      }
    },
  ]);
};
