// Assuming these are your initial values
let initialScore = 20;
let initialNumberWidth = '15rem';
let initialBackgroundColor = '#222';
let initialSecretNumber = Math.floor(Math.random() * 20) + 1;

// Initial game state
let score = initialScore;
let secretNumber = initialSecretNumber;

// Function to reset the game
function resetGame() {
    // Reset the score and secret number
    score = initialScore;
    secretNumber = Math.floor(Math.random() * 20) + 1;

    // Update the UI elements
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?'; // or some default value
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    // Reset the background color and number width
    document.querySelector('.number').style.width = initialNumberWidth;
    document.querySelector('body').style.backgroundColor = initialBackgroundColor;
}

// Attach the event handler to the 'again' button
document.querySelector('.again').addEventListener('click', resetGame);