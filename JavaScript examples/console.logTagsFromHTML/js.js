// Sukurkite HTML dokumentą su lentele (table) ir forma (form). Dokumentu turi būti žemiau aptartos žymos (angl. tags) ir jų atributai.


// Suraskite ir konsolėje atvaizduokite:


// Lentelę su id = "age-table".
  
// Pirmasis <td> toje lentelėje (su id “age”).
  
// Visus <label> elementus lentelės viduje (jų turėtų būti 3).
  
// Pirmasis įvesti (<input>) į formą.
  
// Paskutinę įvesti (<input>) į formą.

let ageTable = document.querySelector('#age-table');
console.log(ageTable);

console.log(document.querySelector('#age'));

console.log(document.querySelectorAll('form table label'));

let obj = document.querySelector('form table input');
console.log(obj);


let lastInput = document.querySelector('form table input:last-of-type');
console.log(lastInput);

let lastInput2 = document.querySelector('form table input:last-child');
console.log(lastInput2);

let lastInput3 = document.querySelectorAll('form table input');
console.log(lastInput3[lastInput3.length - 1]);
