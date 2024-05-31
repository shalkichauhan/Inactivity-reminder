var express = require('express');
var app = express();
var path = require('path');
var pathJoin = path.join(__dirname, '/public');
app.use(express.static(pathJoin));
app.use(express.json());
app.get('/', function (req, res) {
    res.sendFile(path.join(pathJoin, 'index.html'));
}); // yeh kyu likha? Index.html is rendering by
// express.static automatically?
app.post('/feature', function (req, res) {
    var userInput = req.body.sendJSONdataToServer; // userName kyu likha?
    console.log('Received input:', userInput);
});
app.listen(3000, function () {
    console.log('Listening on port 3000!');
});
