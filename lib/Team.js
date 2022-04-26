const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class Team {
    constructor() {
        this.Employees = [];
    }
  
    addManager(name, id, email, officeNumber) {
      this.Employees.push(new Manager(name, id, email, officeNumber));
    }
    addEngineer(name, id, email, github) {
        this.Employees.push(new Engineer(name, id, email, github));
    }
    addIntern(name, id, email, school) {
    this.Employees.push(new Intern(name, id, email, school));
    }

}
  
module.exports = Team;