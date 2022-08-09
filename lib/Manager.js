/** Required Libraries
 *************************************************************************************************/
const Employee = require("./Employee");
/** Constructors
 *************************************************************************************************/
//Inherit Employee's characteristics

class Manager extends Employee {
  constructor(name = "", id = 0, email = "", officeNumber = 0) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }
}
/** Methods
 *************************************************************************************************/
/** Module Exports
 *************************************************************************************************/
module.exports = Manager;
