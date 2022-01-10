import yargs from "yargs";

import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).argv;

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Returns addition of two numbers: num1 + num2",
    builder: {
      num1: {
        describe: "First number",
        demandOption: true,
        type: "number",
      },
      num2: {
        describe: "Second number",
        demandOption: true,
        type: "number",
      },
    },
    handler: function (argv) {
      console.log("Adding two numbers", argv.num1 + argv.num2);
    },
  })
  .parse();

yargs(hideBin(process.argv))
  .command({
    command: "substract",
    describe: "Returns substraction of two numbers: num1 - num2",
    builder: {
      num1: {
        describe: "First number",
        demandOption: true,
        type: "number",
      },
      num2: {
        describe: "Second number",
        demandOption: true,
        type: "number",
      },
    },
    handler: function (argv) {
      console.log("Substraction result", argv.num1 - argv.num2);
    },
  })
  .parse();
