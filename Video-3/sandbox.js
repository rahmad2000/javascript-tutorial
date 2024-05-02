// // for loops

// for (let i = 0; i < 5; i++) {
//     console.log('in loop:',i);
// };
// console.log('loop finished');

// const names = ['John','Adam','Sam'];
// for (let i = 0; i < names.length; i++) {
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }


// //while loop

// const names = ['John','Adam','Sam'];
// let i = 0;

// while (i < names.length) {
//   console.log(names[i])  
//   i++;
// };



// //do while

// let i = 2;
// do {
//     console.log('val of i is:', i);
//     i++;
// } while (i < 5);


// //if statements
// const age = 25;

// if (age > 20) {
//     console.log('you are over 20 years old');
// }

// const customers = ['John','Adam','Sam'];

// if (customers.length > 3) {
//     console.log("that's a lot of customers");
// }

// const password = 'pass';

// if (password.length >= 8) {
//     console.log('that password is long enough');
// }


// //else if statements
// const password = 'p@ss';
// if (password.length >= 12) {
//     console.log('that password is mighty strong');
// } else if (password.length >= 8) {
//     console.log('that password is long enough');
// } else {
//     console.log('password is not long enough');
// }




// //logical operators - OR || and AND &&

const password = 'p@sswo';

if (password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
} else if (password.length >= 8 || password.includes('@') && password.length >=5) {
    console.log('that password is strong enough');
} else {
    console.log('password is not long enough');
}


//logical NOT (!)

let user = false;

if (user) {
    console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {

    if (scores[i] === 0) {
        continue;
    }

    console.log('your score: ', scores[i]);

    if (scores[i] === 100) {
        console.log('congrats, you got the top score!');
        break;
    }
}