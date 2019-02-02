'use strict';

// MULTILINE STRINGS


//ES5
// const string = 'first line\n' + 'second line';

//ES6
// const string = `first line
// second line`;

// or

// const string = 
// `first line
// second line`.trim();

// console.log(string);


// INTERPOLATION

// let myString = `the total is ${1 + 2 + 3 + 4}`;

// console.log(myString);



// REDUCE

// let arr = [1, 2, 3, 4, 5];

// let totalValue = arr.reduce((acc, item) => {
//     return acc + item;
// }, 0);

// let arr = [1, 2, 3, 4, 5];

// let totalValue = arr.reduce((acc, item) => {
//     return acc - item;
// }, 100);

// console.log(totalValue);


// const inputFromServer = [
//     {id: 'a', name: 'Amy'},
//     {id: 'b', name: 'Blanche'},
//     {id: 'c', name: 'Claude'},
//   ];

//   let newObj = inputFromServer.reduce((acc, item) => {
//       acc[item.id] = item;

//       return acc;
//   }, {});
  
//   console.log(newObj);
  


// TEMPLATE TAGS

// function highlight(strings, ...values) {
//     let str = '';
//     strings.forEach((string, i) => {
//         str += `${string} <span class='h1'>${values[i] || ''}</span>`;
//     });
//     return str;
// }

// const name = 'Snickers';
// const age = '100';
// const sentence = highlight`My dog's name is ${name} and he is ${age} years old!`;
// console.log(sentence);