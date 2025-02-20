const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const publicDirecdtoryPath = path.join(__dirname);

app.use(express.static(publicDirecdtoryPath));

app.get('/', (req, res) => {
    res.sendfile(path.join(publicDirecdtoryPath, 'index.html'));
});

app.get("*", (req, res) => {
    res.status(404).sendfile(path.join(publicDirecdtoryPath, "404.html"));
});

app.listen(port, () => {
    console.log("Server is running");
});