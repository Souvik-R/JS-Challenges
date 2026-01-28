const express = require("express");
const app = express();

let data = "Initial Data";

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get("/getData", (req, res) => {
    res.send({
        data
    });
});


app.get("/updateData", (req, res) => {
    data = "Updated Data"
    res.send({
        data
    });
});


const port = 5011;

app.listen(port, () => {
   console.log(`app is listening on port ${port}`);
});