import Person from './modules/DataObject.js';

//This is an IIFE -> Immediately Invoked Function Expression
//This is the JavaScript Module Pattern
(() => {
    console.log('Fired!');

    console.log(Person);
})();