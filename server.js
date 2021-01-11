const config = require("./utils/config");
const express = require("express");
const app = express();
app.set("view engine", "pug");


app.use((req, res, next) => {
    res.setHeader("X-Robots-Tag", "none");
    next();
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const server = app.listen(config.PORT, () => {
    console.log(`Express running on PORT ${server.address().port}`);
});