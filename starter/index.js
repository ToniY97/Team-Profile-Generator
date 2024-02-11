const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Employee = require('./Employee');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Array to store team members
const teamMembers = [];

// Function to prompt for manager's information
function promptManager() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the team manager's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the team manager's employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the team manager's email address:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the team manager's office number:",
    },
  ]);
}

// Function to prompt for engineer's information
function promptEngineer() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer's email address:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub username:",
      },
    ]);
  }

  function promptEmployee() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the employee's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee's email address:",
      },
    ]);
  }
  
  // Function to prompt for intern's information
  function promptIntern() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern's email address:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school:",
      },
    ]);
  }
  

  // Function to initiate the application
async function init() {
    try {
      // Prompt for manager's information
      const managerData = await promptManager();
      const manager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber
      );
      teamMembers.push(manager);

      // Function to prompt for engineer's information
function promptEngineer() {
    const employeeData = await promptEmployee(); // Prompt for common employee information
    return inquirer.prompt([
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub username:",
      },
    ]);
  }