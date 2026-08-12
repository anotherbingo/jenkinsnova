const fs = require("fs");

const requiredFiles = [
    "index.html",
    "style.css",
    "script.js",
    "package.json"
];

for (const file of requiredFiles) {

    if (!fs.existsSync(file)) {

        console.error("Missing file:", file);

        process.exit(1);
    }
}

const html = fs.readFileSync("index.html", "utf8");

if (!html.includes("<title>Nova Café</title>")) {

    console.error("Website title test failed!");

    process.exit(1);
}

console.log("All tests passed successfully!");