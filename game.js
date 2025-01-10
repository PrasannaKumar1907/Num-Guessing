var randomnumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;
var level = 1;
const maxLevel = 5;

document.getElementById('btn').addEventListener('click', function () {
    var guess = parseInt(document.getElementById('guessinput').value);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        display("Please enter a valid number between 1 and 100.");
        document.getElementById('msg').style.color = "#d9534f";
    } else if (guess === randomnumber) {
        display(`Congrats! You unlocked Level ${level} in ${attempts} attempts!`);
        document.getElementById('msg').style.color = "#4CAF50";
        document.getElementById('locked').src = 'unlocked.png';

        if (level < maxLevel) {
            setTimeout(() => {
                nextLevel();
            }, 2000);
        } else {
            display("You completed all levels! Well done!");
            document.getElementById('btn').disabled = true;
        }
    } else if (guess < randomnumber) {
        display("Your number is too low, try again!");
        document.getElementById('msg').style.color = "#d9534f";
    } else {
        display("Your number is too high, try again!");
        document.getElementById('msg').style.color = "#d9534f";
    }

    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
    document.getElementById('guessinput').value = "";
});

function display(msg) {
    document.getElementById('msg').textContent = msg;
}

function nextLevel() {
    level++;
    randomnumber = Math.floor(Math.random() * 100) + 1; 
    attempts = 0;
    document.getElementById('locked').src = 'locked.png';
    document.getElementById('btn').disabled = false;
    display(`Level ${level} started! Guess a number between 1 and 100.`);
    document.getElementById('level').textContent = `Level: ${level}`;
    document.getElementById('msg').style.color = "#333";
    document.getElementById('attempts').textContent = "Attempts: 0";
}
