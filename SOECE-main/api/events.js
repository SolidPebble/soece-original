const { mongoserver } = require('../model/database');
const Event = require('../model/Event');

module.exports = async (req, res) => {
    try {
        await mongoserver();
        const data = await Event.Fetchall();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "Error fetching events" });
    }
};