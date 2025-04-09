document.addEventListener('DOMContentLoaded', function () {
  const burgerStack = document.getElementById('burgerStack');
  const totalPriceElement = document.getElementById('totalPrice');
  let totalPrice = 0;

  document.querySelectorAll('.ingredient').forEach(ingredient => {
    ingredient.addEventListener('click', function () {
      const ingredientName = this.getAttribute('data-name');
      const ingredientPrice = parseFloat(this.getAttribute('data-price'));
      
      const ingredientElement = document.createElement('div');
      ingredientElement.textContent = ingredientName;
      ingredientElement.className = 'added-ingredient';
      burgerStack.appendChild(ingredientElement);

      totalPrice += ingredientPrice;
      totalPriceElement.textContent = totalPrice.toFixed(2);
    });
  });

  document.querySelector('.cta-btn').addEventListener('click', function () {
    alert(`Ваш бургер собран! Итого к оплате: ${totalPrice.toFixed(2)} ₽`);
  });
});
