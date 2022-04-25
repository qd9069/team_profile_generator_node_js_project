const { timeStamp } = require("console");
const figlet = require("figlet");
const fs = require("fs").promises;
const inquirer = require("inquirer");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const generateHtml = require('./src/generateHtml');

class Team {
    constructor() {
        this.list = null;
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
            name: "managerOfficenNumber",
            }
        ]).then((data) => {
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
            let option = data.memberType

            if (option === "Engineer") {
                this.generateEngineer();
            } else if (option === "Intern") {
                this.generateIntern();
            }

            // return writeHtml();

        })


    function writeHtml() {
        const htmlPageContent = generateHtml();

        fs.writeFile("dist/team.html", htmlPageContent, (err) =>
        err ? console.log(err) : console.log("Created team.html file. You'll find it in the 'dist' folder.")
        
        );
    }


       


        // ask Manager questions

        // var selectedOption // change name later

        // while (selectedOption != 'I have finished...') {
        //         // ? Which type of team member would you like to add?
        //         selectedOption = // selecte answer
                
        //         if (selectedOption = 'Engineer') {
        //             // ? What is your engineer's name? gui
        //             // ? What is your engineer's ID? 2
        //             // ? What is your engineer's email? gui@gmai
        //             // ? What is your engineer's GitHub username? guiguizi
        //         } else if (selectedIotioin = 'Intern') {
        //             // ? What is your intern's name? a
        //             // ? What is your intern's ID? b
        //             // ? What is your intern's email? c
        //             // ? What is your intern's school? d
        //         } else {
        //           selectedOption = 'I have finished...' 
        //         }

        // }

       
    }
}




new Team().start();

