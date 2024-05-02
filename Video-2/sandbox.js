// alert('Hello World!');

// // Console Logs to logs things into Console

// console.log(1);
// console.log(2);

// // Variables

// let age = 25;
// let year = 2019;

// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// // points = 50

// var score = 75;
// console.log(score);




// // strings

// console.log('hello, world');

// let email = 'space@nasa.com';
// console.log(email);

// //  string concatenation

// let firstName = 'Space';
// let lastName = 'Nasa';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // getting characters

// console.log(firstName[0]);

// //string length

// console.log(fullName.length);

// //methods

// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result,'and', fullName);

// let index = email.indexOf('@');
// console.log(index);


// //more string methods

// let email = 'space@nasa.com';

// // let result = email.lastIndexOf('a');
// //let result = email.slice(2,5);
// // let result  = email.substring(4,10);
// // let result = email.replace('a','A');
// console.log(result);


// // Math Operations +, -, *, /, **, %

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// let result = radius % 3;
// let result2 = pi * radius**2;

// console.log(result);
// console.log(result2);

// // order of operation - B E D M A S

// let result3 = 5 * (10-3)**2;

// let likes = 10;
// likes++;
// likes--;

// likes +=10;
// likes -=5;
// likes *=4;
// likes /=2;

// console.log(likes)

// // NaN - not a number

// console.log(5 /'hi');

// // concatenation

// let result4 = 'the dish has ' + likes + ' likes';

// console.log(result4);




// // template strings

// const title = 'Best reads of 2024';
// const author = 'James';
// const likes = 21;

// // concatenation way

// //let result = 'The Blog called'  + title + ' by ' + author + ' has ' + likes + ' likes';


// // template string way

// let result = `The Blog called ${title} by ${author} has ${likes}  likes.`;

// console.log(result);

// // creating html templates
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;

// console.log(html);


// // Arrays
// let customers = ['John', 'Andy', 'Adam'];

// customers[1] = 'Sam';

// console.log(customers);

// let ages = [20, 25, 30, 35];

// console.log(ages[2]);

// let random = ['A','Z', 3, 31];

// console.log(random);


// // let result = customers.join('|');
// // let result = customers.indexOf('Adam');
// // let result = customers.concat('Tyrion', 'Aragon');
// let result  = customers.push('Tyrion');
// result = customers.pop();
// console.log(result);

// console.log(customers);
// console.log(result);





// let age;
// console.log(age);

// age = null;
// console.log(age, "null + 4 =", age + 4);


// // booleans & comparisons
// console.log(true, false, "true", "false");

// // // methods can return booleans
// let email = "john@nasa.com";
// let names = ['John', 'Adam', 'Sam'];

// let result = email.includes('@');
// let result2 = names.includes('Adam');

// console.log(result);
// console.log(result2);

// // comparison operators
// let age = 25;

// console.log(age == 25);
// console.log(age == 30);

// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let userName = 'john';
// console.log(userName == 'John');
// console.log(userName == 'john');
// console.log(userName > 'tyrion');
// console.log(userName > 'Tohn');
// console.log(userName > 'John')

let age = 25;
// loose comparison (different types can still be equal)

console.log(age == 25);
console.log(age == '25');

console.log(age != 25);
console.log(age != '25');

// strict comparison (different types cannot be equal)

console.log(age === 25);
console.log(age === '25');

console.log(age !== 25);
console.log(age !== '25');

