document.addEventListener('DOMContentLoaded', function () {
  const quiz = document.getElementById('product-quiz');
  const closeQuiz = document.getElementById('close-quiz');
  const startQuiz = document.getElementById('start-quiz');
  const options = document.querySelectorAll('.gf-option');
  const getResults = document.getElementById('get-results');
  const steps = document.querySelectorAll('.gf-step');
  let currentStep = 0;

  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      step.classList.toggle('hidden', index !== stepIndex);
    });
    currentStep = stepIndex;
  }

  function nextStep() {
    if (currentStep < steps.length - 1) {
      showStep(currentStep + 1);
    }
  }

  startQuiz.addEventListener('click', nextStep);

  options.forEach(option => {
    option.addEventListener('click', nextStep);
  });

  getResults.addEventListener('click', function () {
    const email = document.getElementById('email-input').value;
    if (email) {
      alert('Спасибо! Результаты отправлены на ваш e-mail.');
      quiz.classList.add('hidden');
    } else {
      alert('Пожалуйста, введите ваш e-mail.');
    }
  });

  closeQuiz.addEventListener('click', function () {
    quiz.classList.add('hidden');
  });

  // Trigger to open the quiz (for demonstration purposes)
  document.querySelector('button#open-quiz').addEventListener('click', function () {
    quiz.classList.remove('hidden');
    showStep(0);
  });
});
