const chalk=require('chalk')

// const validator=require('validator/lib/isEmail')
// same as below
const validator=require('validator')

console.log(chalk.blue("Hello world"));
console.log(chalk.blue.inverse("Abdul moiz"));

console.log(chalk.italic.blue.bold("moiz"));

console.log(chalk.green.length);

console.log(chalk.bgBlue("true"));
console.log(chalk.green("success") + 'Khan' + chalk.bgGreen("Moiz"));

console.log(chalk.underline.red("moiz"));
console.log(chalk.green(`The add of 2 + 4 is ${2+4}`))

// const res=validator("moiza894@.com");

// const res=validator.isMobilePhone("0330-3243036");
const res=validator.isEmail("moiza8994@gmail.com")
// console.log(chalk.green(res + " 😉"));
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

// const fal=validator.isEmail("moiza7771.com")
// console.log(fal);