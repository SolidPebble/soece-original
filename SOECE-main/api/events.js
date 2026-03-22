let path = require('path');
let Event = require(path.join(__dirname, '..', 'model', 'Event.js'));

let eventcontroller = async (req, res) => {
    let data = await Event.Fetchall();
    res.json(data);
}

module.exports = eventcontroller;