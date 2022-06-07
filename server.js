const path = require("path");
const express = require("express");

var app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.set("port", process.env.PORT || 8083);

var server = app.listen(app.get("port"), function () {
    console.log("Server listening on port " + server.address().port);
});
