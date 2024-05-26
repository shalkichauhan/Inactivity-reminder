const express = require("express");
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, '/public');

app.get("/", (req, res) => {
    res.send("My server is working");
});
app.use(express.static(publicPath));

app.get('/unsubscribe', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
