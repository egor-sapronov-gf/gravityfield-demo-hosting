document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('fortune-popup');
    const spinButton = document.getElementById('spin-button');
    const closeButton = document.getElementById('close-popup');
    const wheel = document.getElementById('wheel');

    // Show the popup on page load
    popup.style.display = 'flex';

    spinButton.addEventListener('click', function () {
        const randomDegree = Math.floor(Math.random() * 360) + 720; // Additional 720 for multiple spins
        wheel.style.transform = `rotate(${randomDegree}deg)`;
    });

    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});