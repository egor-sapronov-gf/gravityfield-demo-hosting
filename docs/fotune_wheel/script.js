javascript
document.querySelectorAll('.gf-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.gf-question').classList.add('hidden');
        const result = document.querySelector('.gf-result');
        result.classList.remove('hidden');
        result.innerHTML += ' 🎉';
    });
});
