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

yargs(hideBin(process.argv))
  .command({
    command: "show",
    describe: "show user info based on input: user ID",
    builder: {
      userId: {
        describe: "user ID",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      userUtils.readUser(argv.userId);
    },
  })
  .parse();

yargs(hideBin(process.argv))
  .command({
    command: "updateEmail",
    describe: "update user email based on input: user ID, new Email",
    builder: {
      userId: {
        describe: "user ID",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "new email",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      userUtils.updateUserEmail(argv.userId, argv.email);
    },
  })
  .parse();

yargs(hideBin(process.argv))
  .command({
    command: "delete",
    describe: "delete user based on input: user ID",
    builder: {
      userId: {
        describe: "user ID",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      userUtils.deleteUser(argv.userId);
    },
  })
  .parse();
