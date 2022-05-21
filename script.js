// GIVEN I am taking a code quiz - TIMER FOR EACH QUESTION NOT NECESSARY; CAN BE FOR ENTIRE QUIZ

// ADD QUESTIONS HERE (Array of objects)
const question1 = 

// WHEN I click the start button
// Add an event listener here.
let startButton = document.querySelector(".start");
let timeLeft = document.querySelector(".time-left");

// Global variable for time (100 seconds)
let secondsLeft = 100;
// Set this variable to 0 so that it targets the first index in an array of objects
let indexTracking = 0;

// When clicking the start button, start the countdown!
startButton.addEventListener("click", function () {
    countDown();
    // Hide the start button
    startButton.style.display="none";
});

// Create a function that starts the timer
function countDown() {
    let timer = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft + " seconds left to finish the quiz!";

        if (secondsLeft <= 0) {
            // Clear the timer once there's no time left.
            clearInterval(timer);
            // If the seconds left are <= 0, show this message:
            timeLeft.textContent = "Sorry, there's no time left!";
            // Let the user know that the game is over.
            alert("Sorry, time's up!  Let's see your score.");
            // Execute in-game function to show score and type in initials.
        }

    }, 1000);
}


// and I am presented with a question
// Create a function that displays questions
function displayQuestions() {
    // Check answer, subtract or add points, then update the indexTracking by 1.
}

// WHEN I answer a question
// Add a variable for user input (multiple choice: buttons, radios, etc.?)

// THEN I am presented with another question
// Loop through and present another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// If the result is false, deduct time from the clock (global variable; can resue this)

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// Present an alert or show that time is up

// WHEN the game is over
// THEN I can save my initials and score
// Then, show the score and ability to input user initials in local storage