const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsPotatoesItem = document.createElement('li');
ingredientsPotatoesItem.classList.add('item');
ingredientsPotatoesItem.textContent = 'Potatoes';
console.log(ingredientsPotatoesItem);

const ingredientsMushroomsItem = document.createElement('li');
ingredientsMushroomsItem.classList.add('item');
ingredientsMushroomsItem.textContent = 'Mushrooms';
console.log(ingredientsMushroomsItem);

const ingredientsGarlicItem = document.createElement('li');
ingredientsGarlicItem.classList.add('item');
ingredientsGarlicItem.textContent = 'Garlic';
console.log(ingredientsGarlicItem);

const ingredientsTomatosItem = document.createElement('li');
ingredientsTomatosItem.classList.add('item');
ingredientsTomatosItem.textContent = 'Tomatos';
console.log(ingredientsTomatosItem);

const ingredientsHerbsItem = document.createElement('li');
ingredientsHerbsItem.classList.add('item');
ingredientsHerbsItem.textContent = 'Herbs';
console.log(ingredientsHerbsItem);

const ingredientsCondimentsItem = document.createElement('li');
ingredientsCondimentsItem.classList.add('item');
ingredientsCondimentsItem.textContent = 'Condiments';
console.log(ingredientsCondimentsItem);

const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.append(
  ingredientsPotatoesItem,
  ingredientsMushroomsItem,
  ingredientsGarlicItem,
  ingredientsTomatosItem,
  ingredientsHerbsItem,
  ingredientsCondimentsItem
);
