const express = require('express');
const router = express.Router();
const Event = require('../model/Event');

router.get('/', async (req, res) => {
    try {
        const data = await Event.Fetchall();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;