const express = require("express");
const path = require("path");
const notes = require("./db/db.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/notes.html"));
})

app.get("/api/notes", (req, res) => {
    res.json(notes);
})

app.post("/api/notes", (req, res) => {
    const note = {
        id: notes.length + 1,
        title: req.body.title,
        text: req.body.text
    }
    notes.push(note);
    res.sendStatus(200);
})

app.delete("/api/notes/:id", (req, res) => {
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
})
