const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const db = require("./db/db.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/notes.html"));
})

app.get("/api/notes", (req, res) => {
    res.json(db);
})

app.post("/api/notes", (req, res) => {
    db.push(req.body);
    res.sendStatus(200);
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.body, null, 2));
})

app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
})
