var express = require('express');
var path = require('path');
var pathJoining = path.join(__dirname, '/public');
var app = express();
app.use(express.static(pathJoining));
app.get('/', function (req, res) {
    res.send(" this is working");
});
app.listen(3000, function () {
    console.log('working');
});
