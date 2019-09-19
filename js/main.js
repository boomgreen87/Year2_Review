import Team from './modules/DataObject.js';

// This is an IIFE -> Immediately Invoked Function Expression
// This is the JavaScript Module Pattern
(() => {
    console.log('Fired!');

    let bioData = document.querySelector('.bio-wrapper').children;

    // Populate the children with the data object values
    // bioData[0].src = "images/" + Person.avatar;
    // bioData[1].textContent = Person.name;
    // bioData[2].textContent = Person.role;
    // bioData[3].textContent = Person.bio;

    // Alternative way
    // bioData[0].textContent = Person["name"];
    // bioData[1].textContent = Person["role"];
    // bioData[2].textContent = Person["bio"];

    function parsePersonData() {
        // this = the element you click on to make this function run (in this case the button)
        let person = this.textContent;

        // Populate the children with the data object values
        bioData[0].src = `images/${Team[person].avatar}`;
        bioData[1].textContent = Team[person].name;
        bioData[2].textContent = Team[person].role;
        bioData[3].textContent = Team[person].bio;
    }

    // Loop through the object and build some UI
    for (let person in Team) {
        console.log(person);

        // Create a button for each team member
        let currentButton = document.createElement('button');
        
        //Add the person's name to the button
        currentButton.textContent = person;

        // Add an event handler to the button
        currentButton.addEventListener("click", parsePersonData);

        // Put the button in the team section in index.html
        document.querySelector('.team').appendChild(currentButton);
        // bioData.nextElementSibling
    }

})();