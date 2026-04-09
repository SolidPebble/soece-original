const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const { mongoserver } = require('./config/database');

const app = express();

// Security headers — must be first
app.use(helmet());

// CORS — only allow your frontend
app.use(cors({
    origin: 'https://www.soece-nitj.in',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.get('/ping', (req, res) => res.json({ status: 'ok' }));

app.use('/api/events', require('./api/events'));
app.use('/api/faculty', require('./api/faculty'));
app.use('/api/gallery', require('./api/gallery'));
app.use('/api/placements', require('./api/placements'));

const PORT = process.env.PORT || 5000;

mongoserver(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});