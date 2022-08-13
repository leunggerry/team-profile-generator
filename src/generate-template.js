/** Global Constants
 *************************************************************************************************/
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
/** Function Definitions
 *************************************************************************************************/
/**
 * Generate the page template for the team
 * @param {*} teamArr
 * @returns
 */
const generatePageTemplate = (teamArr) => {
  console.log(teamArr);
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      />
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" 
        integrity="sha512-UyNhw5RNpQaCai2EdC+Js0QL4RlVmiq41DkmCJsRV3ZxipG2L0HhTqIf/H9Hp8ez2EnFlkBnjRGJU2stW3Lj+w==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" />
      <title>My Team</title>
    </head>

    <body>
      <header class="container-md p-3 text-center bg-primary text-white myteam">
        <h1>My Team</h1>
      </header>
  
      <main class="team-container container p-3">
        <div class="row justify-content-center">
          ${teamArr
            .map((employee) => {
              return `
                  <div class="employee col-4 p-0 shadow m-2 rounded">
                    <div class="bg-secondary text-white p-2" id="employee-header">
                      <h3 class="text-light">${employee.getName()}</h3>
                      <h4>${employee.getIcon()} ${employee.getRole()}</h4>
                    </div>
                    <div class="p-4 bg-light" id="employee-info">
                      <p class="p-2 bg-white">ID: ${employee.getId()}</p>
                      <p class="p-2 bg-white">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                      <p class="p-2 bg-white">${getEmployeeSpecificInfo(employee)}</p>
                    </div>
                  </div>
                `;
            })
            .join("")}
        </div>
      </main>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </body>
  </html>
    `;
};

/**
 * @description Return Employee specific info
 *
 * @param {*} employee
 * @returns
 */
function getEmployeeSpecificInfo(employee) {
  const role = employee.getRole();
  if (role === "Manager") {
    return `Office Number: ${employee.getOfficeNumber()}`;
  } else if (role === "Engineer") {
    return `GitHub: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
  } else {
    // return intern's school name
    return `School: ${employee.getSchool()}`;
  }
}

/** Module Export
 **************************************************************************************************/
module.exports = (teamArr) => {
  //   console.log(teamArr);
  return generatePageTemplate(teamArr);
};
