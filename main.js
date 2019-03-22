// console
/* 
console.log('hello world');
console.error('This is an Error');
console.warn('This is a Warning');
*/


// let (let can reassign value), const (it Cant be changed)
/*
let age = 24;
age = 42;
console.log(age);

const items = 11;
items = 21;
console.log(items);
*/

// string, numbers, boolean, null, undefined 
/*
const name = 'Robert';
const age = 33;
const rating = 4.4;
const isFat = true;
const item = null;
const gift = undefined;
let z;

console.log(typeof name);
*/

// string
/*
const name = 'Robert';
const age = 33;

// Concatenation
console.log('my name is '+ name +' and i am '+ age);

// Template String
const Hello = `My name is ${name} and i am ${age}`;
console.log(Hello);


// String Property & Method
const w = 'Rice, Food, Drink, Snack, Cake';
// A Method Needs Parentheses / Property dont
console.log(w.length);
console.log(w.split(', '));
*/

/*
// Array - Variables that hold multiple values // Array is zero-based

const Juices = new Array ('Orange Juice', 'Apple Juice', 'Watermelon Juice', 'Pineapple Juice');
// if you see "new" keyword and then something after it is a constructor

Juices[4] = 'Pears Juice'; // not recommended

Juices.push('Mango Juice'); // use this one is a better way (added at the end)

Juices.unshift('Blueberry Juice'); // This one will added in the first Array

Juices.pop(); // This will remove the last Array

console.log(Array.isArray(Juices)); // To check if this is an array (to get true/false value)

console.log(Juices.indexOf('Applejuice')); // to get index of array (number of an array)

console.log(Juices);
*/

// Object Literal

const person = {
  firstName: 'Dodge',
  lastName: 'Smoothie',
  age: '27',
  hobbies: ['run', 'music', 'video games'],
  address: {  
    street: 'nageur 54/2 st',
    city: 'livy',
    state: 'ohiori'
  }
}

console.log(person.firstName, person.lastName);




