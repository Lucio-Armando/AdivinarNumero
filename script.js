let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guess');
    const guess = parseInt(guessInput.value);
    const message = document.getElementById('message');
    attempts++;

    // Validación del input
    if (isNaN(guess) || guess < 1 || guess > 100) {     
        message.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        message.className = 'incorrect';
        return;
    }

    // Comparación del número adivinado
    if (guess < randomNumber) {
        message.textContent = 'Demasiado bajo. Inténtalo de nuevo.';
        message.className = 'incorrect';
    } else if (guess > randomNumber) {
        message.textContent = 'Demasiado alto. Inténtalo de nuevo.';
        message.className = 'incorrect';
    } else {
        message.textContent = `¡Correcto! Lo adivinaste en ${attempts} intentos.`;
        message.className = 'correct';
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = '';
}
