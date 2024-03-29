// GIVEN I am taking a code quiz - TIMER FOR EACH QUESTION NOT NECESSARY; CAN BE FOR ENTIRE QUIZ

// An array of objects containing questions, answers, and the correct answers.
const questionArray = [
    {
        Q: "TestingQ1",
        A: [
            "Testing2",
            "Testing3",
            "Testing4",
            "Testing5"
        ],
        Correct: "Testing2"
    },
    {
        Q: "TestingQ2",
        A: [
            "Testing2-2",
            "Testing3-2",
            "Testing4-2",
            "Testing5-2"
        ],
        Correct: "Testing3-2"
    },
    {
        Q: "TestingQ3",
        A: [
            "Testing2",
            "Testing3",
            "Testing4",
            "Testing5"
        ],
        Correct: "Correct answer here."
    },
    {
        Q: "TestingQ4",
        A: [
            "Testing2",
            "Testing3",
            "Testing4",
            "Testing5"
        ],
        Correct: "Correct answer here."
    },
    {
        Q: "TestingQ5",
        A: [
            "Testing2",
            "Testing3",
            "Testing4",
            "Testing5"
        ],
        Correct: "Correct answer here."
    }

];

// Set to zero to target the first index in an array of objects.
let questionIndex = 0;

// startButton is equal to elements with the "start" class.  Here, button.
let startButton = document.querySelector(".start");
// timeLeft is equal to elements with the "time=left" class.  Here, the h2 tag.
let timeLeft = document.querySelector(".time-left");
// showQuestions is equal to elements with the "show-questions" class.  Here, a section.
let showQuestions = document.querySelector(".show-questions");
// showAnswers is equal to the elements in the "show-answers" class.  Here, a section.
let showAnswers = document.querySelector(".show-answers");
// results is equal to the "results" id.  Here, a span.
let results = document.querySelector("#results");

let doneButton = document.querySelector(".done");
doneButton.style.display = "none";

// Global variable for time (100 seconds).
let secondsLeft = 100;

// The start button being clicked begins the countDown and displayQuestions functions.
startButton.addEventListener("click", function () {
    countDown();
    displayQuestions();
    // Hide the start button
    startButton.style.display = "none";
});

// The countDown function sets a timer that ticks down once per second until the seconds reach 0.
function countDown() {
    let timer = setInterval(function () {
        timeLeft.textContent = secondsLeft + " seconds left to finish the quiz!";
        secondsLeft--;

        if (secondsLeft <= 0) {
            // Clear the timer once there's no time left.
            clearInterval(timer);
            // If the seconds left are <= 0, show this message:
            timeLeft.textContent = 'Sorry, there is no time left! Click "Done" to view your score.';
            showQuestions.style.display = "none";
            showAnswers.style.display = "none";
            results.style.display = "none";
            doneButton.style.display = "inline-block";
            console.log(doneButton);
            // Let the user know that the game is over.
            // alert("Sorry, time's up!  Let's see your score.");
            // Execute in-game function to show score and type in initials.
        }

    }, 1000);
}

// Create a function that displays questions
function displayQuestions() {
    showQuestions.textContent = questionArray[questionIndex].Q;
    console.log(showAnswers);
    for (let i = 0; i < questionArray[questionIndex].A.length; i++) {
        let answerButton = document.createElement("button");
        answerButton.textContent = questionArray[questionIndex].A[i];
        // Define the function here to check the answers
        answerButton.onclick = function checkAnswers() {
            // If the submission is equal to Correct...
            if (answerButton.innerText === questionArray[questionIndex].Correct) {
                // ...show this confirmation message.
                results.textContent = "Right on, popcorn! That's correct.";
                if (questionIndex < questionArray.lengh-1) {
                    questionIndex++;
                    // questionIndex++;
                    console.log(checkAnswers);
                    showAnswers.innerHTML = '';
                    displayQuestions();
                } else {
                    // Show scoreboard
                }
                // If the submission is not equal to Correct...
            } else {
                // ...show this error message and...
                results.textContent = "Sorry, no such luck.";
                if (questionIndex < questionArray.length-1) {
                    questionIndex++;
                    // ...deduct 10 seconds from the clock.
                    secondsLeft -= 10;
                    showAnswers.innerHTML = '';
                    displayQuestions();
                } else {
                    // Show scoreboard
                }
            }
        };
        showAnswers.appendChild(answerButton);
        
    }
    console.log(displayQuestions);
}
    // Check answer, subtract or add points, then update the indexTracking by 1.


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