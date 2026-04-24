const express = require('express');
const router = express.Router();
const Faculty = require('../model/Faculty');

router.get('/', async (req, res) => {
    try {
        const data = await Faculty.Fetchall();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;