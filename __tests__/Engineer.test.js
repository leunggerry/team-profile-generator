/** Required Libraries
 **************************************************************************************************/
const Engineer = require("../lib/Engineer");

/** Mocks
 *************************************************************************************************/

/** Tests
 *************************************************************************************************/
test("Check the Engineer properties", () => {
  const engineer = new Engineer("Tom", 1, "tom@mail.com", "leunggerry");

  expect(engineer.name).toBe("Tom");
  expect(engineer.id).toBe(1);
  expect(engineer.email).toBe("tom@mail.com");
  expect(engineer.github).toBe("leunggerry");
});

test("Check the Engineer role", () => {
  //setup
  const engineer = new Engineer("Tom", 1, "tom@mail.com", "leunggerry");

  //validate
  expect(engineer.getRole()).toBe("Engineer");
});

test("Check the gitHub", () => {
  //setup
  const engineer = new Engineer("Tom", 1, "tom@mail.com", "leunggerry");

  //validate
  expect(engineer.getGithub()).toBe("leunggerry");
});
