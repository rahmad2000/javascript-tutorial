// object literals

let user = {
    name: 'Tyrion',
    age: 31,
    house: 'Lannister',
    location: 'Kings Landing',
    title: ['Hand of the Queen', 'Master of Coin', 'Hand of the King'],
    //Methods
    status:() {
       return `${this.name} is Alive`;
    },
    // this.
    currentTitle(){
        console.log(`${this.name} holds following Titles:`)
        this.title.forEach(title => {
            console.log(title);
        })
    }
}

// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);

// console.log(user['name']);
// user['name'] = 'Arial';
// console.log(user['name']);

// console.log(typeof user);
// console.log(user.status());

user.currentTitle();

// array of objects