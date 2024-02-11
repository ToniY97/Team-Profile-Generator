const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

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
// Function to initiate the application
async function init() {
  try {
    // Menu to add more team members
    let addMore = true;
    while (addMore) {
      // Prompt for team member type
      const { teamMemberType } = await inquirer.prompt([
        {
          type: "list",
          name: "teamMemberType",
          message: "Select the team member type to add:",
          choices: ["Manager", "Engineer", "Intern", "Finish building the team"],
        },
      ]);

      switch (teamMemberType) {
        case "Manager":
          const managerData = await promptManager();
          const manager = new Manager(
            managerData.name,
            managerData.id,
            managerData.email,
            managerData.officeNumber
          );
          teamMembers.push(manager);
          break;

        case "Engineer":
          const engineerData = await promptEngineer();
          const engineer = new Engineer(
            engineerData.name,
            engineerData.id,
            engineerData.email,
            engineerData.github
          );
          teamMembers.push(engineer);
          break;

        case "Intern":
          const internData = await promptIntern();
          const intern = new Intern(
            internData.name,
            internData.id,
            internData.email,
            internData.school
          );
          teamMembers.push(intern);
          break;

        case "Finish building the team":
          // Exit the loop when the user finishes adding team members
          addMore = false;
          break;
      }
    }

    // Generate HTML and write to file asynchronously
    const html = render(teamMembers);
    await fs.promises.writeFile(outputPath, html);

    console.log(`Team profile successfully generated! Check ${outputPath}`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Initialize the application
init();
