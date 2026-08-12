const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8081;
const ROOT = path.join(__dirname, "dist");

const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon"
};

const server = http.createServer((req, res) => {

    let filePath = path.join(
        ROOT,
        req.url === "/" ? "index.html" : req.url
    );

    // Prevent basic path traversal
    if (!filePath.startsWith(ROOT)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
    }

    fs.readFile(filePath, (error, data) => {

        if (error) {
            res.writeHead(404);
            res.end("404 - Page Not Found");
            return;
        }

        const extension = path.extname(filePath);
        const contentType = mimeTypes[extension] || "application/octet-stream";

        res.writeHead(200, {
            "Content-Type": contentType
        });

        res.end(data);
    });
});

server.listen(PORT, "127.0.0.1", () => {

    console.log(`Nova Cafe is running at http://localhost:${PORT}`);

});
