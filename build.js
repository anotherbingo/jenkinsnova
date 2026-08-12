const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "public");
const destination = path.join(__dirname, "dist");

fs.rmSync(destination, {
    recursive: true,
    force: true
});

fs.mkdirSync(destination, {
    recursive: true
});

for (const file of [
    "index.html",
    "style.css",
    "script.js"
]) {
    fs.copyFileSync(
        path.join(__dirname, file),
        path.join(destination, file)
    );
}

console.log("Build completed successfully!");