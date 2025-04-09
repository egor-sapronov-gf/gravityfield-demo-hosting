const ingredients = document.querySelectorAll('.ingredient');
const burger = document.querySelector('.burger');

ingredients.forEach(ingredient => {
    const addButton = ingredient.querySelector('.add-ingredient');
    addButton.addEventListener('click', () => {
        const ingredientType = ingredient.dataset.ingredient;
        const newIngredient = document.createElement('div');
        newIngredient.classList.add(ingredientType);
        burger.appendChild(newIngredient);
    });
});

const orderButton = document.querySelector('.order-button');
orderButton.addEventListener('click', () => {
    // Здесь можно добавить логику заказа бургера
    alert('Бургер заказан!');
});
