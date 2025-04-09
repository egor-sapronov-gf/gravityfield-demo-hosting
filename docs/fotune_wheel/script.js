document.addEventListener('DOMContentLoaded', function () {
  const steps = document.querySelectorAll('.gf-step');
  const result = document.querySelector('.gf-result');
  const nextStepButton = document.querySelector('.gf-next-step');
  const options = document.querySelectorAll('.gf-option');
  const submitButton = document.querySelector('.gf-submit');
  let currentStep = 0;

  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      step.classList.toggle('hidden', index !== stepIndex);
    });
  }

  nextStepButton.addEventListener('click', function () {
    currentStep++;
    showStep(currentStep);
  });

  options.forEach(option => {
    option.addEventListener('click', function () {
      currentStep++;
      if (currentStep < steps.length) {
        showStep(currentStep);
      } else {
        result.classList.remove('hidden');
        steps[currentStep - 1].classList.add('hidden');
      }
    });
  });

  submitButton.addEventListener('click', function () {
    const emailInput = document.querySelector('.gf-email-input');
    if (emailInput.value) {
      alert('Спасибо! Мы отправили вам результаты на ' + emailInput.value);
    } else {
      alert('Пожалуйста, введите ваш e-mail.');
    }
  });

  showStep(currentStep);
});
