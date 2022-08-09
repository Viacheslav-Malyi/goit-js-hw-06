const ingredientsEl = document.querySelector('#ingredients');
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
ingredients.forEach(ingredient => {
  console.log(ingredient);
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add('item');
  ingredientsItem.textContent = ingredient;
  ingredientsEl.append(ingredientsItem);
});
