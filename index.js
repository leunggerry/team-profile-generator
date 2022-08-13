/** Required Packages
 **************************************************************************************************/
const inquirer = require("inquirer");
const generatePage = require("./src/generate-template");

const [Manager, MANGER_QUESTIONS] = require("./lib/Manager");
const [Engineer, ENGINEER_QUESTIONS] = require("./lib/Engineer");
const [Intern, INTERN_QUESTIONS] = require("./lib/Intern");
const { writeFile } = require("./src/generate-site");

/** Global Constants
 **************************************************************************************************/
const TEAM_QUESTION = [
  {
    type: "list",
    name: "employeeType",
    message: "What type of employee would you like to add?",
    choices: ["Engineer", "Intern"],
  },
];
/** Global Variables
 **************************************************************************************************/
var teamDataArr = [];
/** Function Defintions
 **************************************************************************************************/
function init() {
  console.log(`
    ========================================
    Welcome to the team database
    Please provide some info about your team
    ========================================\n\n`);
  promptManager()
    .then((managerAnswers) => {
      //save the manager as object
      saveManager(managerAnswers);
      return managerAnswers;
    })
    .then((managerAnswers) => {
      //check to add another employee
      if (managerAnswers.confirmAddEmployee) {
        return promptTeamMember();
      }
    })
    .then((passed) => {
      console.log(teamDataArr);
      return generatePage(teamDataArr);
    })
    .then((pageHtml) => {
      return writeFile(pageHtml);
    });
}

function promptTeamMember() {
  return inquirer.prompt(TEAM_QUESTION).then((employeeTypeAnswers) => {
    if (employeeTypeAnswers.employeeType === "Engineer") {
      promptEngineer().then((engineerAnswers) => {
        //save the engineer as aobjet
        saveEngineer(engineerAnswers);

        // check if another employee wants to be added
        if (engineerAnswers.confirmAddEmployee) {
          return promptTeamMember();
        }
      });
    }
    // intern defaulted
    else {
      promptIntern().then((internAnswers) => {
        //save the intern as object
        saveIntern(internAnswers);

        // check if another employee wants to be added
        if (internAnswers.confirmAddEmployee) {
          return promptTeamMember();
        }
      });
    }
  });
}
//////// Manager Inputs ///////////
function saveManager(managerAnswers) {
  var manager = new Manager(
    managerAnswers.name,
    managerAnswers.employeeId,
    managerAnswers.email,
    managerAnswers.officeId
  );
  teamDataArr.push(manager);
}

function promptManager() {
  console.log(`
    ========================================
    Provide the Managers's info
    ========================================\n`);
  return inquirer.prompt(MANGER_QUESTIONS);
}

//////// Engineer Inputs ///////////
function saveEngineer(engineerAnswers) {
  //   console.log(engineerAnswers);
  var engineer = new Engineer(
    engineerAnswers.name,
    engineerAnswers.employeeId,
    engineerAnswers.email,
    engineerAnswers.githubId
  );

  teamDataArr.push(engineer);
}
function promptEngineer() {
  console.log(`
    ========================================
    Provide the Engineer's info
    ========================================\n`);
  return inquirer.prompt(ENGINEER_QUESTIONS);
}
//////// Intern Inputs ///////////
function saveIntern(internAnswers) {
  var intern = new Intern(
    internAnswers.name,
    internAnswers.employeeId,
    internAnswers.email,
    internAnswers.schoolName
  );

  teamDataArr.push(intern);
}

function promptIntern() {
  console.log(`
    ========================================
    Provide the Intern's info
    ========================================\n`);
  return inquirer.prompt(INTERN_QUESTIONS);
}
/** Main Program
 **************************************************************************************************/
init();
