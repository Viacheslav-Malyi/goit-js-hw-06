const numberOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', numberOfCategories.length);

const category = document.querySelectorAll('h2');
console.log('Category:', category[0].textContent);

const elements = document.querySelectorAll('ul');
const element1 = elements[1].querySelectorAll('li');
console.log('Elements:', element1.length);

console.log('Category:', category[1].textContent);
const element2 = elements[2].querySelectorAll('li');
console.log('Elements:', element2.length);

console.log('Category:', category[2].textContent);
const element3 = elements[3].querySelectorAll('li');
console.log('Elements:', element3.length);
