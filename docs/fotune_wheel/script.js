document.addEventListener('DOMContentLoaded', function() {
  const openDayButton = document.querySelector('.gf-open-day');
  const submitDayButton = document.querySelector('.gf-submit-day');
  const claimGiftButton = document.querySelector('.gf-claim-gift');
  const questionStep = document.querySelector('.gf-question');
  const resultStep = document.querySelector('.gf-result');
  const welcomeStep = document.querySelector('.gf-welcome');
  const daysContainer = document.querySelector('.gf-days');
  const giftDescription = document.querySelector('.gf-gift-description');

  const gifts = [
    "Скидка 10%",
    "Бесплатная доставка",
    "Подарочная упаковка",
    "Сюрприз от Деда Мороза"
  ];

  let selectedDay = null;

  openDayButton.addEventListener('click', function() {
    welcomeStep.classList.add('hidden');
    questionStep.classList.remove('hidden');
    generateDays();
  });

  function generateDays() {
    daysContainer.innerHTML = '';
    for (let i = 1; i <= 24; i++) {
      const dayButton = document.createElement('button');
      dayButton.textContent = i;
      dayButton.className = 'bg-gray-200 py-2 px-3 rounded hover:bg-gray-300';
      dayButton.addEventListener('click', function() {
        selectedDay = i;
        submitDayButton.classList.remove('hidden');
        document.querySelectorAll('.gf-days button').forEach(btn => btn.classList.remove('bg-blue-500', 'text-white'));
        dayButton.classList.add('bg-blue-500', 'text-white');
      });
      daysContainer.appendChild(dayButton);
    }
  }

  submitDayButton.addEventListener('click', function() {
    if (selectedDay !== null) {
      questionStep.classList.add('hidden');
      resultStep.classList.remove('hidden');
      const giftIndex = Math.floor(Math.random() * gifts.length);
      giftDescription.textContent = gifts[giftIndex];
    }
  });

  claimGiftButton.addEventListener('click', function() {
    alert('Ваш подарок добавлен в корзину!');
    resultStep.classList.add('hidden');
    welcomeStep.classList.remove('hidden');
  });
});
