// // function declaration
// function greet(){
//     console.log('Hello There');
// }

// // function expression
// const speak = function () {
//     console.log('Good Day!');
// };
// greet();

// speak()




// // 2. Function with parameters
// const greet = function(name ='John', time = 'Morning'){
//     console.log(`Hello, Good ${time} ${name}`);
// }
// greet('Adam');





// // 3. Function with return
// const calArea = function(radius){
//     return 3.14 * radius**2;
// };
// let area = calArea(3);
// console.log(area);




// // 4. Function with arrow
// const calArea = (radius) => 3.14 * radius**2;
// let area = calArea(3);
// console.log(area);


// // practice arrow functions
// const greet = function(){
//     return 'Hello World';
// }
// // const greet = () => 'Hello World';
// console.log(greet());

// const bill = function(products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// console.log(bill([10, 15, 30], 0.2));
// };
// // const bill = (products, tax) =>{
// //     let total = 0;
// //     for (let i = 0; i < products.length; i++) {
// //         total += products[i] + products[i] * tax;
// //     }
// //     return total;
// // };



// const name = 'Adam';


// //function
// const greet = (name)=> `Hello ${name}`
// let resultOne = greet(name);
// console.log(resultOne);

// // methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);





// callbacks & foreach

// let people = ['John','Adam','Tyrion','Jeffery','Snow','Targarian']

// const logPerson = (people, index) => {
//     console.log(`${index} - Hello ${people}`);
// };

// people.forEach(logPerson);


//Reference to UI
const ul = document.querySelector('.people');

let people = ['John','Adam','Tyrion','Jeffery','Snow','Targarian'];

let html = ``;

people.forEach(person =>{
    //create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;