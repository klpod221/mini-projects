const fs = require("fs");

const data = [];

fs.readdirSync("./").forEach((file) => {
  if (fs.lstatSync(file).isDirectory()) {
    data.push(file);
  }
});

fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
