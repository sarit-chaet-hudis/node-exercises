const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const userUtils = require("./Users.cjs");

yargs(hideBin(process.argv))
  .command({
    command: "create",
    describe: "create user based on inputs: name, email",
    builder: {
      name: {
        describe: "name",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "email",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      userUtils.createUser(argv.name, argv.email);
    },
  })
  .parse();
