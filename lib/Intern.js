/** Required Libraries
 *************************************************************************************************/
const Employee = require("./Employee");
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
module.exports = Intern;
