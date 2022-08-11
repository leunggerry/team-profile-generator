/** Required Libraries
 *************************************************************************************************/
const Employee = require("./Employee");

/** Global constants
 *************************************************************************************************/
const INTERN_QUESTIONS = [
  {
    type: "input",
    name: "name",
    message: "What is the Intern's name? (required)",
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
    name: "schoolName",
    message: "What is the Intern's school name? (required)",
    validate: (schoolNameInput) => {
      if (schoolNameInput) {
        return true;
      } else {
        console.log("Please enter the school name");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmAddEmployee",
    message: "Would you like to add another employee?",
    default: false,
  },
];
/** Constructors
 *************************************************************************************************/
//Inherit Employee's characteristics

class Intern extends Employee {
  constructor(name = "", id = 0, email = "", school = "") {
    super(name, id, email);

    this.school = school;
  }

  /**
   * Returns Intern role
   * @returns
   */
  getRole = function () {
    return "Intern";
  };

  /**
   * Return the inter school
   * @returns
   */
  getSchool() {
    return this.school;
  }
}
/** Methods
 *************************************************************************************************/
/** Module Exports
 *************************************************************************************************/
module.exports = [Intern, INTERN_QUESTIONS];
