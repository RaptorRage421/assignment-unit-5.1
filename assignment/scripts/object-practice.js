console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Sam', //first name
  lastName: 'Shacter', //last name
  hasSiblings: true, //hassiblings - boolean
  shoeCount: 4, //shoe count
  favThreeFoods: ['Tequila', 'Water', 'Pizza'], // favorite foods. 
  attributes: {
    perception: 7, // perception - affected by tequila
    strength: 7, // strength
    endurance: 6, // endurance
    agility: 5, // agility - affected by tequila
    charisma: 5, //  charisma - affected by tequilia
    intelligence: 9, // intelligence - affected by tequila
    anxiety: 6, // anxiety

  }
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName;
fullName = me.firstName + " " + me.lastName;
console.log('Full name is: ', fullName);



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
let myFirstFood = me.favThreeFoods[0];
let myLastFood = me.favThreeFoods[me.favThreeFoods.length - 1];

console.log('My first favorite food is: ', myFirstFood);
console.log('My last fav food is: ', myLastFood);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
me.shoeCount = me.shoeCount + 1;
console.log('Just got a new pair of shoes! Bringing my total shoes to: ', me.shoeCount)

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'Purple';
console.log('Just added information about my favorite color: ', me.favoriteColor);