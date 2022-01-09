import * as fs from "fs";
//fs.writeFileSync("2.1.txt", "Initial Text");
//fs.copyFileSync("2.1.txt", "2.1-copy.txt");
//fs.renameSync("2.1-copy.txt", "new-name.txt");
console.log(fs.readdirSync("./"));
fs.mkdtempSync("tempi");
