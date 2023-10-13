const express = require("express"),
fs = require("fs"),
path = require("path")

const PORT = process.env.PORT || 8080
STATIC_PATH = path.join(__dirname, (process.env.STATIC_PATH || "/static"))

var app = express()

app.use(express.static(STATIC_PATH))

app.listen(PORT, () => {
    console.log("Now listening on port: " + PORT)
})