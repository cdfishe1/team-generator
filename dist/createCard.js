//Guest TA Tom McCarthy helped develop this script for which I am very grateful!

const createCard = teamArray => {
  console.log(teamArray);

  let cards = []

    for (let i = 0; i < teamArray.length; i++) {

        if (teamArray[i].getRole() === 'Manager') {
            cards.push(` <div class="card" style="width: 18rem; display: inline-block">
            <div class="card-header bg-primary">
              <p class='text-light'>Name: ${teamArray[i].name}</p>
              <p class='text-light'><i class="fas fa-mug-hot" style='margin-right: 0.5vw;'></i>Manager</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${teamArray[i].id}</li>
              <li class="list-group-item">Email: ${teamArray[i].email}</li>
              <li class="list-group-item">Office Number: ${teamArray[i].officeNumber}</li>
            </ul>
          </div>`)

        } else if (teamArray[i].getRole() === "Engineer") {
            cards.push(` <div class="card" style="width: 18rem; display: inline-block">
        <div class="card-header bg-primary">
          <p class='text-light'>Name: ${teamArray[i].name}</p>
          <p class='text-light'><i class="fas fa-laptop-code " style='margin-right: 0.5vw;'></i>Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${teamArray[i].id}</li>
          <li class="list-group-item">Email: ${teamArray[i].email}</li>
          <li class="list-group-item">GitHub: ${teamArray[i].github}</li>
        </ul>
      </div>`)
        } else {
          cards.push(` <div class="card" style="width: 18rem; display: inline-block">
      <div class="card-header bg-primary">
        <p class='text-light'>Name: ${teamArray[i].name}</p>
        <p class='text-light'><i class="fas fa-graduation-cap" style='margin-right: 0.5vw;'></i>Intern</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${teamArray[i].id}</li>
        <li class="list-group-item">Email: ${teamArray[i].email}</li>
        <li class="list-group-item">School: ${teamArray[i].school}</li>
      </ul>
    </div>`)
      }


    }


    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
        <title>Development Team Roster</title>
    </head>
    <body>
        <header class="jumbotron sticky-top bg-primary py-3 text-center mb-2">
            <h1 class='text-light'>My Development Team</h1>
          </header>
    
        <main>
            <div class='container'>
                ${cards.join(' ')}  
            </div>
            
        </main>
    </body>
    </html>`


    return html
}

module.exports = createCard;
