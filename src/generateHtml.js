
const renderList = (list) => {
    return list.items
      .map((item) => `<li class="list-group-item">${item.toString()}</li>`)
      .join("");
  };

// function 1 for adding Manager
const renderManager = (Manager) => {
    return `<div class="col my-4">
                <div class="card h-100 border-warning" style="width: 100%;">
                    <div class="card-header background text-white">
                        <h3>${Manager.name}</h3>
                        <p>${Manager.getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${Manager.id}</li>
                        <li class="list-group-item"><a href="mailto:${Manager.email}">Email: ${Manager.email}</a></li>
                        <li class="list-group-item">${Manager.officeNumber}</li>
                    </ul>
                </div>
            </div>`  
    
};

// function 2 for adding Engineer
const renderEngineer = (Engineer) => {
    return `<div class="col my-4">
                <div class="card h-100 border-warning" style="width: 100%;">
                    <div class="card-header background text-white">
                        <h3>${Engineer.name}</h3>
                        <p>${Engineer.getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${Engineer.id}</li>
                        <li class="list-group-item"><a href="mailto:${Engineer.email}">Email: ${Engineer.email}</a></li>
                        <li class="list-group-item"><a href="https://github.com/${Engineer.github}">GitHub: ${Engineer.github}</a></li>
                    </ul>
                </div>
            </div>`
};

// function 3 for adding Intern
const renderIntern = (Intern) => {
    return  `<div class="col my-4">
                <div class="card h-100 border-warning" style="width: 100%;">
                    <div class="card-header background text-white">
                        <h3>${Intern.name}</h3>
                        <p>${Intern.getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${Intern.id}</li>
                        <li class="list-group-item"><a href="mailto:${Intern.email}">Email: ${Intern.email}</a></li>
                        <li class="list-group-item">School: ${Intern.school}</li>
                    </ul>
                </div>
            </div>`
};

// function 4 to add cards depending on role

const memberCard = (memberType) => {
    if(memberType === "Engineer") {
        return renderEngineer();
     } else if (memberType === "Intern") {
         return renderIntern();
     } else {
         return;
     }
};

const addCard = [];
addCard = addCard.push(memberCard);

const addMember = (member) => {
    return addCard.map((member) => {
        addCard.push(memberCard);
    }).join("");
};


const generateHtml = () => {
    return 
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="./style.css">
        </head>
    
        <body>
            <header>
                <h1 class="display-4 font-weight-bolder">My Team Profile</h1>
            </header>
    
            <!-- area to add more card -->
            <div class="mx-auto teamCard" style="width: 60%;">
          
                <div class="row row-cols-1 row-cols-md-3">
                    <!-- add team member card - depends on how many team members the team has and role of the team member-->

                    <!-- for Manager -->
                    ${renderManager(Manager)}

                    <!-- for Engineer and Intern -->
                    ${addMember()}
    
                    
                    
                </div>
            </div>
    
        </body>
    </html>

    `;
};

module.exports = generateHtml;
