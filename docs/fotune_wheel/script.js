/* Скрипты механики */
const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const spinBtn = document.querySelector('.spinBtn');
const closeBtn = document.querySelector('.close-btn');
const popupOverlay = document.querySelector('.popup-overlay');
const emailForm = document.querySelector('.email-form');

// логика вращения колеса...
spinBtn.addEventListener('click', () => {
  // вращение колеса...
});

// закрытие попапа
closeBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

// сбор email
emailForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // сбор email...
});
