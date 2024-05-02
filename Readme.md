# Learning JavaScript: A Student's Journey

This README documents my journey as a student learning JavaScript. It includes resources, explanations, and code snippets that demonstrate my progress and understanding of various JavaScript concepts.

## Resource

Learn JavaScript with me by following this helpful YouTube playlist:
[JavaScript Tutorial for Beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc).

## What I've Learned So Far

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
Feel free to follow along, review the code, and explore the concepts discussed. Happy coding!