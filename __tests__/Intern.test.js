/** Required Libraries
 **************************************************************************************************/
const [Intern, ...rest] = require("../lib/Intern");
/** Mocks
 *************************************************************************************************/

/** Tests
 *************************************************************************************************/
test("Check the Interns attributes", () => {
  const intern = new Intern("Tom", 1, "tom@mail.com", "Carleton");

  expect(intern.name).toBe("Tom");
  expect(intern.id).toBe(1);
  expect(intern.email).toBe("tom@mail.com");
  expect(intern.school).toBe("Carleton");
});

test("Check the School", () => {
  const intern = new Intern("Tom", 1, "tom@mail.com", "Carleton");

  expect(intern.getSchool()).toBe("Carleton");
});

test("Check the Role", () => {
  const intern = new Intern("Tom", 1, "tom@mail.com", "Carleton");

  expect(intern.getRole()).toBe("Intern");
});
