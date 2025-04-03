console.log("Team B Loading")
const sum = require("./teamA.js") // First run this file then come to me
// Synchronous, so run the file teamA and then teamB will run
// So, fileA runs automatically

const PROFITS = 100;
const EXPENSES = 20;

const REVENUES = sum(PROFITS + EXPENSES)

sum(10);
sum(10, 20);
sum(10, 30, 49);
sum(11, 21, 31, 41);

module.exports = {
    PROFITS,
    EXPENSES,
    REVENUES
};

console.log("Team B ends ✅")