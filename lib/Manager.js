const Employee = require('./Employee');

// created child object - Manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        // Super calls the Employee constructor.
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    } 

}

// Engineer.getRole();

module.exports = Manager;