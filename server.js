const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const notesArray = [
    {
        title: "Test Title",
        text: "Test text"
    }
];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/notes.html"));
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
