import chalk from "chalk"

console.log(chalk.blue("Hello World"))
console.log(chalk.blue.bgRed.bold('Hello world!'));


const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));