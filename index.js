var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var colourTest = function () {
  console.log("Here are the colours of chalk available:");
  console.log(chalk.black("black"));
  console.log(chalk.red("red"));
  console.log(chalk.green("green"));
  console.log(chalk.yellow("yellow"));
  console.log(chalk.blue("blue"));
  console.log(chalk.magenta("magenta"));
  console.log(chalk.cyan("cyan"));
  console.log(chalk.white("white"));
  console.log(chalk.gray("gray"));
}

colourTest();
console.log(chalk.bold.underline.red("You can combine attributes!"));

