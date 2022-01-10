const fs = require("fs");
const uniqid = require("uniqid");

const createUser = function (userName, userEmail) {
  const users = loadUsers();
  users.push({ id: uniqid(), userName: userName, email: userEmail });
  saveUsers(users);
  // return something?
};
const readUsers = function () {
  const users = loadUsers();
  console.log(users);
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

module.exports = { createUser: createUser, readUsers: readUsers };
