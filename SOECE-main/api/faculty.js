const { mongoserver } = require('../model/database');
const Faculty = require('../model/Faculty');

module.exports = async (req, res) => {
    try {
        await mongoserver();
        const data = await Faculty.Fetchall();
        res.status(200).json(data);
    } catch (err) {
        console.error(err); // ADD THIS LINE
        res.status(500).json({ message: "Error fetching faculty" });
    }
};