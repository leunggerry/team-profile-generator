/** Required Libraries
 *************************************************************************************************/
const Employee = require("./Employee");

/** Global constants
 *************************************************************************************************/
const ENGINEER_QUESTIONS = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name? (required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the name");
        return false;
      }
    },
  },
  {
    type: "number",
    name: "employeeId",
    message: "What is the Employee ID? (required)",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the ID number");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address? (required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the email address");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "githubId",
    message: "What is the Engineer's GitHub Username? (required)",
    validate: (githubIdInput) => {
      if (githubIdInput) {
        return true;
      } else {
        console.log("Please enter the Github Username");
        return false;
      }
    },
  },
];
const ICON = `<span class="oi oi-code"></span>`;
/** Constructors
 *************************************************************************************************/
//Inherit Employee's characteristics

class Engineer extends Employee {
  constructor(name = "", id = 0, email = "", github = "") {
    super(name, id, email);

    this.github = github;
    this.icon = ICON;
  }

  /**
   * Returns Engineer role
   * @returns
   */
  getRole = function () {
    return "Engineer";
  };

  /**
   * Return the github username
   * @returns
   */
  getGithub = function () {
    return this.github;
  };

  getIcon = function () {
    return this.icon;
  };
}
/** Methods
 *************************************************************************************************/
/** Module Exports
 *************************************************************************************************/
module.exports = [Engineer, ENGINEER_QUESTIONS];
