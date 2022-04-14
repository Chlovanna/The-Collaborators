const generateProfile = (profile) => {
  console.log(profile);

  const html = [];

  // created manager HTML card
  const generateManager = (manager) => {
    console.log(manager);
    let managerHtml = ` 
      <div class="container">
      <div class="row">
          <div class="row team-area col-12 d-flex justify-content-center">
          <div class="card-header">
         <h2 class="card-title">Name:${manager.name} </h2>
         <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</i></h3>
       
         <ul class="list-group list">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
          </ul>
          </div>
      </div>
      </div>
      </div>
      `;
    html.push(managerHtml);
  };
  // created engineer HTML card
  const generateEngineer = (engineer) => {
    console.log(engineer);
    let engineerHtml = ` 
    <div class="container">
    <div class="row">
        <div class="row team-area col-12 d-flex justify-content-center">
        <div class="card-header">
       <h2 class="card-title">Name:${engineer.name} </h2>
       <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</i></h3>
      
         <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
          <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
          </ul>
          </div>
      </div>
      </div>
      </div>
      `;
    html.push(engineerHtml);
  };
  // created Intern HTML card
  const generateIntern = (intern) => {
    console.log(intern);
    let internHtml = ` 
    <div class="container">
    <div class="row">
        <div class="row team-area col-12 d-flex justify-content-center">
        <div class="card-header">
       <h2 class="card-title">Name:${intern.name} </h2>
       <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</i></h3>
           <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
          <li class="list-group-item">School: ${intern.school}</li>
          </ul>
          </div>
          </div>
          </div>
      </div>
      `;
    html.push(internHtml);
  };
//  created a for loop for all cards
  for (let i = 0; i < profile.length; i++) {
    if (profile[i].getRole() === "Manager") {
      generateManager(profile[i]);
    }
    if (profile[i].getRole() === "Engineer") {
      generateEngineer(profile[i]);
    }
    if (profile[i].getRole() === "Intern") {
      generateIntern(profile[i]);
    }
  }

  return html.join("");
};

module.exports = (profile) => {
  return `

  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="../dist/style.css">
  </head>
  
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <main> ${generateProfile(profile)} </main>
</body>
`;
};
