const fs = require("fs");
const uniqid = require("uniqid");

const createUser = function (userName, userEmail) {
  const users = loadUsers();
  users.push({ id: uniqid(), userName: userName, email: userEmail });
  saveUsers(users);
  // return something?
};
const readUser = function (userId) {
  const users = loadUsers();
  const user = users.find((user) => user.id === userId);
  console.log(user);
};

const loadUsers = function () {
  try {
    const data = fs.readFileSync("Users.json").toString();
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const saveUsers = function (users) {
  const data = JSON.stringify(users);
  fs.writeFileSync("Users.json", data);
};

module.exports = { createUser: createUser, readUser: readUser };
