const figlet = require("figlet");
const fs = require("fs").promises;
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Team = require('./lib/Team');
const generateHtml = require('./src/generateHtml');

class CLI {
    constructor() {
        this.team = null;
    }

    start() {
        //create a promise to allow chaining .then/.catch
        new Promise((resolve, reject) => {
            figlet("Team Profile Generator", function (err, data) {
                if (err) {
                    reject(err);
                    return;
                }
                console.log(data);
                resolve();
            });
        })
        .catch(() => {
            // something is wrong with figlet.
            // provide fallback welcome message
            console.log("Welcome to Team Profile Generator");
        })
        .then(() => {
            this.team = new Team ();
            // return to chain any errors to the last .catch below
            this.addManager();
        })
        .catch((err) => this.handleError(err));
    }

    handleError(err) {
        console.log(err);
        console.log("Something went wrong. Scroll up to see details.");
    }

    addManager() {
        return inquirer.prompt([
            {
            type: "input",
            message: "What is the team manager's name?",
            name: "managerName",
            },
            {
            type: "input",
            message: "What is the team manager's ID?",
            name: "managerId",
            },
            {
            type: "input",
            message: "What is the team manager's email?",
            name: "managerEmail",
            },
            {
            type: "input",
            message: "What is the team manager's office number?",
            name: "managerOfficeNumber",
            }
        ]).then((data) => {
            this.team.addManager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);

            this.addMember();
        })
    }

    // function to prompt questions for engineer
    generateEngineer(){
        return inquirer.prompt([
            {
            type: "input",
            message: "What is your engineer's name?",
            name: "engineerName",
            },
            {
            type: "input",
            message: "What is your engineer's ID?",
            name: "engineerId",
            },
            {
            type: "input",
            message: "What is your engineer's email?",
            name: "engineerEmail",
            },
            {
            type: "input",
            message: "What is your engineer's GitHub username?",
            name: "engineerGithub",
            }
        ]).then((data) => {            
            this.team.addEngineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);

            this.addMember();
        })
    }

    // function to prompt questions for intern
    generateIntern() {
        return inquirer.prompt([
            {
            type: "input",
            message: "What is your intern's name?",
            name: "internName",
            },
            {
            type: "input",
            message: "What is your intern's ID?",
            name: "internId",
            },
            {
            type: "input",
            message: "What is your intern's email?",
            name: "internEmail",
            },
            {
            type: "input",
            message: "What is your intern's school?",
            name: "internSchool",
            }
        ]).then((data) => {
            this.team.addIntern(data.internName, data.internId, data.internEmail, data.internSchool);
            
            this.addMember();
        })
    }

    addMember() {
        return inquirer.prompt([
            {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "memberType",
            choices: ['Engineer', 
                    'Intern',
                    'I have finished adding team members',],
            },
        ]).then((data) => {
            let option = data.memberType;

            if (option === "Engineer") {
                this.generateEngineer();
            } else if (option === "Intern") {
                this.generateIntern();
            } else {
                // done adding team member, time to generate the html
                return this.writeHtml();
            }

        })
        .catch((err) => this.handleError(err));
    }
    
    writeHtml() {
        console.log(this.team);

        const htmlPageContent = generateHtml(this.team.Employees);

        fs.writeFile("dist/team.html", htmlPageContent, (err) =>
        err ? console.log(err) : console.log("Created team.html file. You'll find it in the 'dist' folder.")
        );   
    }
}

new CLI().start();
