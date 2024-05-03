// object literals

// const titles = [
//     {titleName: 'Hand of the Queen', influence: '30 Million'},
//     {titleName: 'Master of Coin', influence: '10 Million'},
//     {titleName: 'Hand of the King', influence: '50 Million'}
// ];

// console.log(titles);

let user = {
    name: 'Tyrion',
    age: 31,
    house: 'Lannister',
    location: 'Kings Landing',
    title: [
        {titleName: 'Hand of the Queen', influence: '30 Million'},
        {titleName: 'Master of Coin', influence: '10 Million'},
        {titleName: 'Hand of the King', influence: '50 Million'}
    ],
    //Methods
    status(){
       return `${this.name} is Alive`;
    },
    // this.
    currentTitle(){
        console.log(`${this.name} holds following Titles:`)
        this.title.forEach(title => {
            console.log(title.titleName, title.influence);
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