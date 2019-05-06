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



// Object Literal___________________________________
/*
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
*/
// console.log(person.address.city);

/* this is part of es6
const { firstName, lastName, address: { street }} = person;

console.log(street);
*/
/* we can also add properties
person.email = 'dodges12@gmail.com';

console.log(person);
*/


/*
// arrays of objects________________________

const todos = [
  {
  id: 1,
    text: 'clean up room',
    isCompleted: true
  },
  {
  id: 2,
    text: 'meeting at the same spot',
    isCompleted: false
  },
  {
  id: 3,
    text: 'go workout',
    isCompleted: true
  }
];

*/

// console.log(todos[1].text);

// to convert to json in case you want to send data to a server
/*
const todosJSON = JSON.stringify(todos); 
console.log(todosJSON);
*/

/*
// for loops
for(let i = 0; i <= 10; i++){
  console.log(`For Loop Numbers: ${i}`);
}

// while loops
let i = 0;
while(i < 10){
  console.log(`While Loop Numbers: ${i}`);
  i++;
}
*/

/*
// loops through arrays that use for loops - but there is a better way
for(let i = 0; i < todos.length; i++){
  console.log(todos[i].text);
}
*/

/*
// for of loops kinda structed kinda similar - but easy to read
for(let todo of todos) {
  console.log(todo.text);
}
*/

/*
// forEach
todos.forEach(function(todo){
  console.log(todo.text);
});
*/

/*
// map this will returned in arrays
const todoText = todos.map(function(todo){
  return todo.text;
});

console.log(todoText);
*/

/*
// filter this will filter as it says /this will show in array just the text
const todoCompleted = todos.filter(function(todo){
  return todo.isCompleted === true;
}).map(function(todo){
  return todo.text;
})

console.log(todoCompleted);
*/

// Conditionals *********

/*
const x = 15;

if(x === 15) {
  console.log('x is 15');
}else if(x > 15){
  console.log('x is greater than 15');
}else{
  console.log('x is less than 15');
}
*/

// Multiple Conditions
/*
const x = 13;
const y = 5;
*/
/* one of this have to be true -the code will run
if(x > 12 || y < 6){
  console.log('x is greater than 12 or y is less than 6');
}
*/

/* both of this have to be true 
if(x > 12 && y < 6){
  console.log('x is greater than 12 or y is less than 6');
}
*/


// Ternary Operator *********
/*
const x = 10;

const color = x > 10? 'yellow' : 'green';

console.log(color);
*/

/*
// Switch
const x = 10;

const color = x > 10? 'yellow' : 'green'; // const color = 'red';

switch(color){
  case 'yellow':
    console.log('color is yellow');
    break;
  case 'green':
    console.log('color is green');
    break;
  default:
  console.log('color is not yellow or green');
  break;
}
*/

// Functions
/* normal javascript function
function addNums(num1, num2){
  return num1 + num2;
}

console.log(addNums(6,9));
*/

/*
// es6 arrow function
const addNums = (num1, num2) =>{
  console.log(num1 + num2);
}

addNums(6,9);
*/

/*
// es6 classes
// Constructor Function
function Person(firstName, lastName, birthOfDate){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthOfDate = new Date(birthOfDate);
  
   // this will work but not good - it will show everything you dont want to show
  this.getBirthYear = function() {
    return this.birthOfDate.getFullYear();
  }
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }

// use prototype is a better way
Person.prototype.getBirthYear = function() {
  return this.birthOfDate.getFullYear();
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// Instantiate Object
const person1 = new Person('rinrin', 'luoway', '2-4-1995');
const person2 = new Person('chery', 'kawari', '8-7-1996');

console.log(person2.getFullName());
console.log(person1);
*/

// Class - this is prettier way to write it but it works the same
/*
class Person {
  constructor(firstName, lastName, birthOfDate){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthOfDate = new Date(birthOfDate);
  }

  getBirthYear() {
    return this.birthOfDate.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate Object
const person1 = new Person('rinrin', 'luoway', '2-4-1995');
const person2 = new Person('chery', 'kawari', '8-7-1996');

console.log(person2.getFullName());
console.log(person1);
*/


//////////////////// with html/css 
/*
// Single Element 
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

// Multiple Element - recomended to use querySelectorAll
console.log(document.querySelectorAll('.item'));
*/ 

/*
//looping things
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));
*/

/*
// Changing things In The DOM (user interface)
const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'I Added It';
ul.children[1].innerText = 'So What I Changed';
ul.lastElementChild.innerHTML = '<h3>Bigger Text</h3>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
*/


// Event
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#my-form').style.background = '#eee';
});