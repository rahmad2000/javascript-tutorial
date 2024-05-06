//  const para = document.querySelector('div.error');

//  console.log(para);


//  const para = document.querySelectorAll('p');
//  const errors = document.querySelectorAll('.error'); 
//  console.log(errors);

//  console.log(para[2]);



// const title =  document.getElementById('page-title');
// console.log(title);

// const errors = document.getElementsByClassName('error');

// console.log(errors);

// console.log(errors[0]);

// const paras = document.getElementsByTagName('p');
// console.log(paras);

// const para = document.querySelector('p');
// console.log(para);




// const para = document.querySelector('p');
// para.innerText = 'Dragons in Westros';

// const paras = document.querySelectorAll('p');
// paras.forEach(para =>{
//     para.innerText += ' Winter is Coming';
// });


// const content = document.querySelector('.content');
// console.log(content);

// content.innerHTML += '<h2>GAME OF THRONES</h2>';


// const people = ['Jon','Tyrion','Adam'];

// people.forEach(person =>{
//     content.innerHTML += `<p>${person}</p>`;
// })







// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://www.theonion.com');
// link.innerText = 'The Onion';

// const msg = document.querySelector('p');

// console.log(msg.getAttribute('class'));
// msg.setAttribute('class','success');
// msg.setAttribute('style','color:green');







// const title = document.querySelector('h1');

// // title.setAttribute('style','margin:50px');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';

// title.style.margin = '';




const content = document.querySelector('p');

console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');

content.classList.add('success');


