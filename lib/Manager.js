/** Required Libraries
 *************************************************************************************************/
const Employee = require("./Employee");

/** Global constants
 *************************************************************************************************/
const MANGER_QUESTIONS = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name? (required)",
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
    name: "officeId",
    message: "What is the Office ID? (required)",
    validate: (officeIdInput) => {
      if (officeIdInput) {
        return true;
      } else {
        console.log("Please enter the Office ID");
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

class Manager extends Employee {
  constructor(name = "", id = 0, email = "", officeNumber = 0) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  /**
   * Returns Manager role
   * @returns
   */
  getRole = function () {
    return "Manager";
  };
}
/** Methods
 *************************************************************************************************/
/** Module Exports
 *************************************************************************************************/
module.exports = [Manager, MANGER_QUESTIONS];
