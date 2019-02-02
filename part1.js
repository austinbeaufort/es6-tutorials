'use strict';

// CLASSES

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     hello() {
//         return 'Hello, i am ' + this.name + '.';
//     }
// }

// class Programmer extends Person {
//     hello() {
//         return super.hello() + ' I am a programmer.';
//     }
// }



// const george = new Person('George');
// const peter = new Person('Peter');
// const anna = new Programmer('Anna');
// const elsa = new Programmer('Elsa');

// console.log( george.hello() );
// console.log( peter.hello() );
// console.log( anna.hello() );
// console.log( elsa.hello() );



// MAKING A MAP IN JS

// const m = new Map();

// m.set('color', 'red');
// m.set('age', 2);

// const color = m.get('color');
// const age = m.get('age');

// console.log(color);
// console.log(age);

// delete a map item
// m.delete('age');
// console.log(m);
// delete all map items with m.clear();


// check if a map has an item by key
// const hasColor = m.has('color');
// console.log(hasColor);

// find the number of items in a map
// const size = m.size;
// console.log(size);

// CAN INITIALIZE A MAP WITH A SET OF VALUES

const m = new Map([['color', 'red'], ['owner', 'flavio'], ['age', 22]]);

// EVEN OBJECTS CAN BE USED AS THE KEYS OF MAPS

// loop over keys of a map
// for (let k of m.keys()) {
//     console.log(k);
// }

// loop over values of a map
// for (let v of m.values()) {
//     console.log(v);
// }

// loop over entries of maps
// for (let [k, v] of m.entries()) {
//     console.log(k, v);
// }

// CONVER THE MAP KEYS / VALUES INTO AN ARRAY
// const a = [...m.keys()];
// console.log(a);

// const b = [...m.values()];
// console.log(b);


// WEAKMAP
// Items are never garbage collected.
// every key of a weakmap is an object.
// when the reference to the object is lost,
// then the value can be collected.
// cannot iterate over keys/values of a weakmap
// cannot clear items or check size.


// ARROW FUNCTIONS

// implicit return
// const myFunction = () => 'test';

// console.log(myFunction());

// when returning an object, wrap it in parenthesis!
// const myFunction = () => ({value: 'test'});

// console.log(myFunction());


// 'this' with regular functions

// const car = {
//     model: 'Fiesta',
//     manufacturer: 'Ford',
//     fullName: function() {
//         return `${this.manufacturer} ${this.model}`;
//     }
// }

// alert(car.fullName());


// arrow functions generally do not work well with object methods.



// PROMISES

// let done = true;

// const isItDoneYet = new Promise((resolve, reject) => {
//     if(done) {
//         const workDone = 'here is the thing i built';
//         resolve(workDone);
//     } else {
//         const why = 'still working on something else';
//         reject(why);
//     }
// });

// console.log(isItDoneYet);


// const isItDoneYet = new Promise();

// const checkIfItsDone = () => {
//     isItDoneYet
//         .then(ok => {
//             console.log(ok)
//         })
//         .catch(err => {
//             console.error(err)
//         })
// }

// console.log(checkIfItsDone);


// CLASSES

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     hello() {
//         return 'Hello, I am ' + this.name + '.';
//     }
// }

// class Actor extends Person {
//     hello() {
//         return super.hello() + 'I am an actor.';
//     }
// }

// let tomCruise = new Actor('Tom Cruise');
// console.log(tomCruise.hello());


// DEFAULT PARAMETERS


// DESTRUCTURING ASSIGNMENTS

// const person = {
//     firstName: 'austin',
//     lastName: 'beaufort',
//     actor: false,
//     age: 26
// }

// const {firstName, lastName, actor, age} = person;

// console.log(lastName);



// ES8

// STRING PADDING

// console.log('test'.padStart(22));
// console.log('test'.padStart(8, 'nest'));
// console.log('test'.padEnd(8, '   !'));
// console.log('test'.padEnd(8, 'nest'));


// OBJECT.VALUES
// returns an array containing all the objects own property values.

// const person = { name: 'Fred', age: 87 };
// console.log(Object.values(person));


// ALSO WORKS WITH ARRAYS
// const people = ['fred', 'tony'];
// console.log(Object.values(people));


// OBJECT.ENTRIES
// const person = { name: 'Fred', age: 87 };
// console.log(Object.entries(person));

// ALSO WORKS WITH ARRAYS
// const people = ['fred', 'tony'];
// console.log(Object.entries(people));



// GETOWNPROPERTYDESCRIPTORS()



// ES9

// REST AND SPREAD PROPERTIES CAN NOW BE USED IN OBJECTS.

// LOOKAHEADS AND LOOKBEHINDS IN REGULAR EXPRESSIONS


// MERGING TWO OBJECTS

// const object1 = {
//     name: 'austin'
// }

// const object2 = {
//     age: 26
// }

// const object3 = {...object1, ...object2};

// console.log(object3);



// STARTSWITH() METHOD FOR STRINGS
// startsWith(word to check for, number of character to start checking at.)

// console.log('testing'.startsWith('test'));

// console.log('going on testing'.startsWith('test'));

