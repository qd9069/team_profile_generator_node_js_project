const Employee = require('./Employee');

// created child object - Engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {

        // Super calls the Employee constructor.
        super(name, id, email);

        this.github = github;
       
    }

    getGithub() {
        return `${this.github}`;
    } 
    
    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;