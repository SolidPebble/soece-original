let path = require('path');
let Faculty = require(path.join(__dirname, '..', 'model', 'Faculty.js'));

let facultycontroller = async (req, res) => {
    let data = await Faculty.Fetchall();
    res.json(data);
}

module.exports = facultycontroller;