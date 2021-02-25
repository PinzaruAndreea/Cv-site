const express = require("express");
const app = express();

//set port
const port = process.env.PORT || 8080

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});

app.use(express.static(__dirname));

//routes

app.get("/", function(req, res) {
    res.render("./index.html");
})

app.listen(port, function() {
    console.log("app running");
})
