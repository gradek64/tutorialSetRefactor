/*
  "no-unused-vars": "off",
  options are: "off", "warn" , "error"

  or you can specify in which scenarion you want highlight an error

  "no-unused-vars": ["error", { "args" }]

*/

const greg = "is cool";
const greg1 = "is cool";
const greg2 = "is cool";
const greg3 = "is cool";

document.write(greg);

const obj = {
  prop1: "prop1",
  prop2: "prop2"
};

const promise = new Promise((resolve, reject) => {
  resolve("works");
});
