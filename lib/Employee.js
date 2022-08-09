/** Required Libraries
 **************************************************************************************************/

/** Constructor
 *************************************************************************************************/
class Employee {
  constructor(name = "", id = 0, email = "") {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  /** Methods
   *************************************************************************************************/
  /**
   * Return the employee's name
   * @returns
   */
  getName = function () {
    return this.name;
  };
  /**
   * Return the employee's ID
   * @returns
   */
  getId = function () {
    return this.id;
  };
  /**
   * Return the email
   * @returns
   */
  getEmail = function () {
    return this.email;
  };
  /**
   * Return role as Employee
   * @returns
   */
  getRole = function () {
    return "Employee";
  };
}
/** Module Export
 *************************************************************************************************/
module.exports = Employee;
