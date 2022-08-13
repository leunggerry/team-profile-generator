/** Required Libaries
 **************************************************************************************************/
const fs = require("fs");

/** Function Definitions
 **************************************************************************************************/
const writeFile = (fileContent) => {
  // resolve - if the promise is fullfilled
  // reject - if promise is not fullfilled
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      //if there is an error, reject the Promise and send the error to the promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure hte Promise doesn't acceidentally execute the resolve() function as well
        return;
      }

      // if it went well , resove the Promise and send the successfull data to the `then()` method
      resolve({
        ok: true,
        message: "File Created",
      });
    });
  });
};

module.exports = {
  writeFile,
};
