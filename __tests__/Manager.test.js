/** Required Libraries
 **************************************************************************************************/
const Manager = require("../lib/Manager");
/** Mocks
 *************************************************************************************************/

/** Tests
 *************************************************************************************************/
test("Check manager attributes", () => {
  //setup
  const manager = new Manager("Tom", 1, "tom@mail.com", 3);

  //validate
  expect(manager.name).toBe("Tom");
  expect(manager.id).toBe(1);
  expect(manager.email).toBe("tom@mail.com");
  expect(manager.officeNumber).toBe(3);
});

test("Check the manager role", () => {
  //setup
  const manager = new Manager("Tom", 1, "tom@mail.com", 3);

  //validate
  expect(manager.getRole()).toBe("Manager");
});
