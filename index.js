const fs = require("fs").promises;
const inquirer = require("inquirer");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

class Team {
    constructor(){
        // ?
    }

    start(){
        //create a promise to allow chaining .then/.catch
        new Promise((resolve, reject) => {
            if (err){
                reject(err);
                return;
            }
            resolve();
            console.log("Welcome to the Team Profile Generator!")
        })
        .then(()=>{
            // return promise to continue chaining
            return;

        })
    }

    addMember = () => {

        inquirer.prompt([
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
            },
        ]);
        // .then ()
        inquirer.prompt([
            {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "memberType",
            choices: ['Engineer', 
                    'Intern',
                    'I have finished adding team members',],
            },
            
        ]);
    }
}




new Team().start();




// const init = () => {
//     inquirer
//         .prompt([
//             // 1. title of the project  
//             {
//             type: 'input',
//             message: 'What is the title of your project?',
//             name: 'title',
//             },
//             // 2. enter description
//             {
//             type: 'input',
//             message: 'Please enter the description of your project.',
//             name: 'description',
//             },
//             // 3. enter installation instructions
//             {
//             type: 'input',
//             message: 'Please enter the installation instructions of your project.',
//             name: 'installation',
//             },
//             // 4. enter usage information
//             {
//             type: 'input',
//             message: 'Please enter the usage information of your project.',
//             name: 'usage',
//             },
//             // 5. select a license from a list of options
//             {
//             type: 'list',
//             message: 'Please choose a license for your project.',
//             name: 'license',
//             choices: ['Apache License 2.0', 
//                     'Academic Free License v3.0',
//                     'MIT License',
//                     'Boost Software License 1.0',
//                     'GNU Affero General Public License v3.0',
//                     'GNU General Public License v2.0',
//                     'GNU General Public License v3.0',
//                     'GNU Lesser General Public License v2.1',
//                     'Mozilla Public License 2.0',
//                     'The Unlicense'],
//             },
//             // 6. enter contribution guidelines
//             {
//             type: 'input',
//             message: 'Please enter the contribution guidelines of your project.',
//             name: 'contribution',
//             },
//             // 7. enter tests instructions
//             {
//             type: 'input',
//             message: 'Please enter the tests instructions of your project.',
//             name: 'tests',
//             },
//             // 8. enter for questions: Github username, email address
//             {
//             type: 'input',
//             message: 'Please enter your GitBub username.',
//             name: 'username',
//             },
//             {
//             type: 'input',
//             message: 'Please enter your email address.',
//             name: 'email',
//             },
//         ])
//         .then((data) => {
//             // console.log(data);

//             // to replace all spaces with %20 for the license badge
//             const license = data.license.replace(/\s+/g, '%20');
//             // console.log(license);

//             // to capitalize the first letter of each word in title
//             const title = data.title.split(" ").map((word) => { 
//                 return word[0].toUpperCase() + word.substring(1); 
//             }).join(" ");
//             // console.log(title);

//             const readmePageContent = generateMarkdown(data, license, title);

//             // Step2: write all user responses in the README file
//             fs.writeFile('sampleREADME.md', readmePageContent, (err) =>
//                 err ? console.log(err) : console.log('Successfully created README.md!')
//             );

//         });

// }

// init();