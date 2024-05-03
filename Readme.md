# Learning JavaScript: A Student's Journey

This README documents my journey as a student learning JavaScript. It includes resources, explanations, and code snippets that demonstrate my progress and understanding of various JavaScript concepts.

## Resource

Learn JavaScript with me by following this helpful YouTube playlist:
[JavaScript Tutorial for Beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc).

## What I've Learned So Far


## Table of Contents

1. [Console Log and Alerts](#console-log-and-alerts)
2. [Variables](#variables)
3. [Strings and Methods](#strings-and-methods)
4. [Math Operations](#math-operations)
5. [Template Strings](#template-strings)
6. [Arrays and Methods](#arrays-and-methods)
7. [Null, Undefined, and Booleans](#null-undefined-and-booleans)
8. [Comparison and Type Conversion](#comparison-and-type-conversion)
9. [For Loops](#for-loops)
10. [While Loops](#while-loops)
11. [Conditional Statements](#conditional-statements)
12. [Logical Operators](#logical-operators)
13. [Switch Statements](#switch-statements)
14. [Variable and Block Scope](#variable-and-block-scope)
15. [Basic Functions](#basic-functions)
16. [Function with Parameters](#function-with-parameters)
17. [Function with Return Value](#function-with-return-value)
18. [Arrow Functions](#arrow-functions)
19. [Functions and Methods](#functions-and-methods)
20. [Callbacks and forEach](#callbacks-and-for-each)
21. [Reference to UI](#reference-to-ui)


### Syntax Basics

#### Console Log and Alerts
```javascript
alert('Hello World!');
console.log(1); // Logs numbers to the console
console.log(2);
```

#### Variables
```javascript
let age = 25; // Using let to declare a variable
let year = 2019;
age = 30; // Reassigning variable
const points = 100; // Constant value, cannot be reassigned
var score = 75; // Using var (older way)
```

#### Strings and Methods
```javascript
let email = 'space@nasa.com';
let firstName = 'Space';
let lastName = 'Nasa';
let fullName = firstName + ' ' + lastName; // String concatenation
console.log(fullName.toUpperCase()); // Convert string to uppercase
let result = fullName.toLowerCase();
console.log(result, 'and', fullName);
let index = email.indexOf('@');
console.log('Index of @:', index);
```

#### Math Operations
```javascript
let radius = 10;
const pi = 3.14;
let area = pi * radius**2; // Area of a circle
console.log('Area of circle:', area);
```

#### Template Strings
```javascript
const title = 'Best reads of 2024';
const author = 'James';
const likes = 21;
let result = `The Blog called ${title} by ${author} has ${likes} likes.`; // Template literal
console.log(result);
```

#### Arrays and Methods
```javascript
let customers = ['John', 'Andy', 'Adam'];
customers[1] = 'Sam'; // Modifying array
console.log(customers);
let result = customers.push('Tyrion'); // Adding to array
result = customers.pop(); // Removing from array
console.log(customers);
```

#### Null, Undefined, and Booleans
```javascript
let age;
console.log(age); // Undefined
age = null;
console.log(age, "null + 4 =", age + 4); // Null
```

#### Comparison and Type Conversion
```javascript
let age = 25;
console.log(age == 25); // Loose comparison
console.log(age === 25); // Strict comparison
let score = '100';
score = Number(score);
console.log(score + 1);
console.log(typeof score);
```


### Syntax Basics

#### For Loops
```javascript
// Simple for loop from 0 to 4
for (let i = 0; i < 5; i++) {
    console.log('in loop:', i);
}
console.log('loop finished');

// Iterating over an array
const names = ['John', 'Adam', 'Sam'];
for (let i = 0; i < names.length; i++) {
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
```

#### While Loops
```javascript
const names = ['John', 'Adam', 'Sam'];
let i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}
```

#### Conditional Statements
```javascript
// Using if, else if, and else
const age = 25;
if (age > 20) {
    console.log('you are over 20 years old');
}

const password = 'pass';
if (password.length >= 8) {
    console.log('that password is long enough');
} else {
    console.log('password is not long enough');
}
```

#### Logical Operators
```javascript
const password = 'p@sswo';
if (password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
} else if (password.length >= 8 || password.includes('@') && password.length >=5) {
    console.log('that password is strong enough');
} else {
    console.log('password is not long enough');
}
```

#### Switch Statements
```javascript
const grade = 'D';
switch (grade) {
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got a B!');
        break;
    case 'C':
        console.log('you got a C!');
        break;
    case 'D':
        console.log('you got a D!');
        break;
    default:
        console.log('Not a Valid Grade');
        break;
}
```

#### Variable and Block Scope
```javascript
const age = 30;
if (true) {
    const age = 40;
    const name = 'John';
    console.log('inside 1st code block:', age, name);
    if (true) {
        const age = 50;
        console.log('inside 2nd code block:', age, name);
        var test = 'hello';
    }
}
console.log('outside code block:', age, name, test); // Note: `name` is not accessible here due to block scoping
```

### Functions

#### Basic Functions
```javascript
function greet(){
      console.log('Hello There');
  }
const speak = function () {
    console.log('Good Day!');
};
greet();
speak();
```

#### Function with Parameters
```javascript
const greet = function(name ='John', time = 'Morning'){
    console.log(`Hello, Good ${time} ${name}`);
}
greet('Adam');
```

#### Function with Return Value
```javascript
const calArea = function(radius){
    return 3.14 * radius**2;
};
let area = calArea(3);
console.log(area);
```

#### Arrow Functions
```javascript
const calArea = (radius) => 3.14 * radius**2;
let area = calArea(3);
console.log(area);

// Practice Arrow Functions

const greet = function(){
    return 'Hello World';
}
// const greet = () => 'Hello World';
console.log(greet());

const bill = function(products, tax) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};
console.log(bill([10, 15, 30], 0.2));
```

#### Functions and Methods
```javascript
const name = 'Adam';
const greet = (name)=> `Hello ${name}`
let resultOne = greet(name);
console.log(resultOne);

let resultTwo = name.toUpperCase();
console.log(resultTwo);
```

#### Callbacks and forEach
```javascript
let people = ['John','Adam','Tyrion','Jeffery','Snow','Targarian']

const logPerson = (people, index) => {
    console.log(`${index} - Hello ${people}`);
};

people.forEach(logPerson);
```

#### Reference to UI
```javascript
const ul = document.querySelector('.people');

let people = ['John','Adam','Tyrion','Jeffery','Snow','Targarian'];

let html = ``;

people.forEach(person =>{
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
```



Feel free to follow along, review the code, and explore the concepts discussed. Happy coding!