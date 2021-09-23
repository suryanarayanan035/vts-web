const result = require("dotenv").config();
if (result.error) {
  console.log("Error occured while loading env file");

  throw result.error;
} else {
  console.log("Loading ENVIRONMENT Successfull");
}

console.log(process.env.MONGODB_URI);
