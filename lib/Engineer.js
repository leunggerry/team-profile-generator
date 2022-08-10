/** Required Libraries
 *************************************************************************************************/
const Employee = require("./Employee");
/** Constructors
 *************************************************************************************************/
//Inherit Employee's characteristics

class Engineer extends Employee {
  constructor(name = "", id = 0, email = "", github = "") {
    super(name, id, email);

    this.github = github;
  }

  /**
   * Returns Manager role
   * @returns
   */
  getRole = function () {
    return "Engineer";
  };

  /**
   * Return the github username
   * @returns
   */
  getGithub() {
    return this.github;
  }
}
/** Methods
 *************************************************************************************************/
/** Module Exports
 *************************************************************************************************/
module.exports = Engineer;
