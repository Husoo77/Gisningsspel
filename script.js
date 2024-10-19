// Generate random number between 1 and 100
const correctNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

const guessForm = document.getElementById('guessForm');
const guessInput = document.getElementById('guessInput');
const feedback = document.getElementById('feedback');
const guessList = document.getElementById('guessList');

guessForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submit
    const userGuess = parseInt(guessInput.value);

    // Input validation: ensure number is between 1 and 100
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        feedback.style.color = 'red';
        return;
    }

    guessCount++;

    // Create a new <li> element for each guess
    const guessItem = document.createElement('li');
    guessItem.textContent = `Guess ${guessCount}: ${userGuess}`;
    guessList.appendChild(guessItem);

    // Check if guess is correct
    if (userGuess === correctNumber) {
        feedback.textContent = `Your guess is correct! Guess count = ${guessCount}`;
        feedback.style.color = 'green';
    } else if (userGuess < correctNumber) {
        feedback.textContent = "Too low!";
        feedback.style.color = 'blue';
    } else {
        feedback.textContent = "Too high!";
        feedback.style.color = 'blue';
    }

    // Clear the input field after each guess
    guessInput.value = '';
});
