// object literals

let user = {
    name: 'Tyrion',
    age: 31,
    family: 'Lannister',
    location: 'Kings Landing',
    title: ['Hand of the Queen', 'Master of Coin', 'Hand of the King']
}

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

// console.log(user['name']);
// user['name'] = 'Arial';
// console.log(user['name']);

console.log(typeof user);
// array of objects