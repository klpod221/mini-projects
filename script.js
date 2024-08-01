const fs = require("fs");

const data = [];

fs.readdirSync("./").forEach((file) => {
  skip = ["node_modules", ".git", ".vscode", ".github"];
  if (skip.includes(file)) return;

  if (fs.lstatSync(file).isDirectory()) {
    data.push(file);
  }
});

fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
