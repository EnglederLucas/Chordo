const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const chords = require('./server/routes/api/chordRequests.js');

app.use('/api/', chords);
app.use(express.static(__dirname + '/public'));


const port = process.env.port || 5000;

app.get('/', (req,res) => {
    res.sendFile('index.html');
});

app.listen(port, () => console.log(`Server started on port ${port}`));
