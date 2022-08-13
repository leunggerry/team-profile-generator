/** Global Constants
 *************************************************************************************************/
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
/** Function Definitions
 *************************************************************************************************/
const generatePageTemplate = (teamArr) => {
  console.log(teamArr);
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team</title>
    </head>
    <body>
      <header class="myteam">
        <h1>My Team</h1>
      </header>
  
      <main>
        <div class="team-container continainer">
          ${teamArr
            .map((employee) => {
              console.log(employee.getName());

              return `
                  <div class="employee">
                    <div class="" id="employee-header">
                      <h2 class="text-light">${employee.getName()}</h2>
                      <h3>${employee.getRole()}</h3>
                    </div>
                    <div id="employee-info">
                      <span>ID: ${employee.getId()}</span>
                      <span>Email: ${employee.getEmail()}</span>
                      <span>${getEmployeeSpecificInfo(employee)}</span>
                    </div>
                  </div>
                `;
            })
            .join("")}
        </div>
      </main>
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

// ${engineers.map((engineerEmp) => {
//     return `
//       <div class="">
//       <h3>${engineerEmp.getRol}</h3>
//     `;
//  })}
