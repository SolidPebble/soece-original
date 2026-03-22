let path = require("path");
let { getdb } = require(path.join(__dirname, 'database.js'));
module.exports = class Faculty {
    constructor(Name, Designation, Department, Qualification, Email, PhotoURL) {
        this.Name = Name;
        this.Designation = Designation;
        this.Department = Department;
        this.Qualification = Qualification;
        this.Email = Email;
        this.PhotoURL = PhotoURL;
    }
    static async Fetchall() {
        let db = getdb();
        let data = await db.collection('Faculty').find({}).toArray();
        return data;
    }
}