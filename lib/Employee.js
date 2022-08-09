/** Required Libraries
 **************************************************************************************************/

/** Constructors
 *************************************************************************************************/
function Employee(name = "", id = 0, email = "") {
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
Employee.prototype.getName = function () {
  return this.name;
};
/**
 * Return the employee's ID
 * @returns
 */
Employee.prototype.getId = function () {
  return this.id;
};
/**
 * Return the email
 * @returns
 */
Employee.prototype.getEmail = function () {
  return this.email;
};
/**
 * Return role as Employee
 * @returns
 */
Employee.prototype.getRole = function () {
  return "Employee";
};
/** Module Export
 *************************************************************************************************/
module.exports = Employee;
