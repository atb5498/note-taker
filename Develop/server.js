const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
})
