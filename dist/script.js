const Manager = require('../lib/Manager');

const createManager = async data => {
    await data;
    const resultsEl = document.querySelector('#results');
    const cardEl = document.createElement('div');
    cardEl.setAttribute('class', 'card');
    const cardHeaderEl = document.createElement('div');
    cardHeaderEl.setAttribute('class', 'card-header');
    cardHeaderEl.setAttribute('class', 'bg-primary');
    const nameEl = document.createElement('p');
    nameEl.setAttribute('class', 'text-light');
    const listEl = document.createElement('ul');
    listEl.setAttribute('class', 'list-group');
    listEl.setAttribute('class', 'list-group-flush');
    const idEl = document.createElement('li');
    idEl.setAttribute('class', 'list-group-item');
    const emailEl = document.createElement('li');
    emailEl.setAttribute('class', 'list-group-item');
    const officeEl = document.createElement('li');
    officeEl.setAttribute('class', 'list-group-item');

    emailEl.innerHTML = `Email: ${data.email}`;
    idEl.innerHTML = `ID: ${data.id}`;
    officeEl.innerHTML = `Office: ${data.office}`;

    nameEl.innerHTML = `Name: ${data.name}`;

    listEl.append(emailEl);
    listEl.append(idEl);
    listEl.append(officeEl);

    cardHeaderEl.append(nameEl);

    cardEl.append(cardHeaderEl);
    cardEl.append(listEl);

    resultsEl.append(cardEl);

    console.log(data);
    console.log('This is pulling data');
}

createManager();

module.exports = createManager;