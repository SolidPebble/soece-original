const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { mongoserver } = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => res.json({ status: 'ok' }));

app.use('/api/events', require('./api/events'));
app.use('/api/faculty', require('./api/faculty'));

const PORT = process.env.PORT || 5000;

mongoserver(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});