const express = require('express');
const app = express();
const path = require('path');

const pathJoin = path.join(__dirname, '/public');

app.use(express.static(pathJoin));
app.use(express.json());


app.post('/feature', (req:any, res:any) => {
    const userInput = req.body.sendJSONdataToServer;// userName kyu likha?
    console.log('Received input:', userInput);

});

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
