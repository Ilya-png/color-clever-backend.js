const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");

// Your code here!

unDefined(process.argv[2], process.argv[3]);

function unDefined(primary, secondary) {
  if (primary === undefined && secondary === undefined) {
    console.log("Minimum one valid color required, please try");
  } else if (primary !== undefined && secondary === undefined) {
    const returnedValue1 = colorDeconstructor(primary);
    if (returnedValue1 === undefined) {
      console.log("Your input is not a valid");
    } else {
      console.log("Your color is made up of " + returnedValue1);
    }
  } else if (primary !== undefined && secondary !== undefined) {
    const returnedValue1 = colorCombinator(primary, secondary);
    if (returnedValue1 === undefined) {
      console.log("One or more of your inputs are invalid");
    } else {
      console.log(
        primary + " and " + secondary + " combined is " + returnedValue1
      );
    }
  } else {
    console.log("NOTHING IS WORKING Now");
  }
}
