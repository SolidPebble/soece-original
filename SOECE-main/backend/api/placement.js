const express = require('express');
const router = express.Router();
const Placement = require('../model/Placement');

router.get('/', async (req, res) => {
    try {
        const data = await Placement.Fetchall();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;