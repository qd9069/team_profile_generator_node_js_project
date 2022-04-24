const Employee = require('./Employee');

// created child object - Intern
class Intern extends Employee {
    constructor(name, id, email, school) {

        // Super calls the Employee constructor.
        super(name, id, email);

        this.school = school;

    }

    getSchool() {
        return `${this.school}`;
    } 

    getRole() {
        return `Intern`;
    }

}

module.exports = Intern;