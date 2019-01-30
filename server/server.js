const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const chords = require('./routes/api/chordRequests.js');

app.use('/api/', chords);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

