const config = require("./utils/config");
const moment = require("moment");
const express = require("express");
const app = express();
app.set("view engine", "pug");


let items = [
    {
        name: "Clock",
        content: `${moment().format("MMMM Do YYYY, h:mm:ss a")}`,
        position: [2, 2],
        size: [2, 2]
    }
];

app.use((req, res, next) => {
    res.setHeader("X-Robots-Tag", "none");
    next();
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    let numBoxes = items.reduce((acc, val) => {
        return acc + val.size[0] * val.size[1];
    }, 0);
    console.log(numBoxes);
    res.render("index", { title: "Homepage", items, numBoxes });
});

const server = app.listen(config.PORT, () => {
    console.log(`Express running on PORT ${server.address().port}`);
});