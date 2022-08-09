/** Required Libraries
 **************************************************************************************************/
const Employee = require("../lib/Employee.js");

/** Mocks
 *************************************************************************************************/

/** Tests
 *************************************************************************************************/
test("Check Employee Credentials", () => {
  // Setup
  const employee = new Employee("Tom", 1, "tom@mail.com");

  // Verify
  expect(employee.name).toBe("Tom");
  expect(employee.id).toBe(1);
  expect(employee.email).toBe("tom@mail.com");
});
