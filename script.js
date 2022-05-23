// GIVEN I am taking a code quiz - TIMER FOR EACH QUESTION NOT NECESSARY; CAN BE FOR ENTIRE QUIZ

// An array of objects containing questions, answers, and the correct answers.
const questionArray = [
    {
        Q: "Which method would you use to stop a running clock in JavaScript?",
        A: [
            "setInterval()",
            "splice()",
            "clearInterval()",
            "setTimeout()"
        ],
        Correct: "clearInterval()"
    },
    {
        Q: "Which two parameters does the addEventListener() method take?",
        A: [
            "Two: type, listener",
            "Three: type, listener, options",
            "Three: type, listener, useCapture",
            "All options are correct."
        ],
        Correct: "All options are correct."
    },
    {
        Q: "What is JavaScript?",
        A: [
            "It's another way of referring to Cascading Style Sheets.",
            "A scripting or programming language that allows you to implement complex features on web pages.",
            "Coffee-flavored text",
            "It's the same thing as the Java language."
        ],
        Correct: "A scripting or programming language that allows you to implement complex features on web pages."
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
// yourScore is equal to the "scores" class.  Here, an aside.
let yourScore = document.querySelector(".your-score");
// Initially hide the Your Scores aside.
yourScore.style.display = "none";
// pointsCounter is equal to the "points-counter" span.
let pointsCounter = document.querySelector(".points-counter");
// Set current points to zero.
let currentPoints = 0;
// results is equal to the "results" id.  Here, a span.
let results = document.querySelector("#results");
// doneButton is equivalent to the "done" button.
let doneButton = document.querySelector(".done");
// Initially hide the doneButton.
doneButton.style.display = "none";
// Initially hide the High Scores aside.
let highScores = document.querySelector("#high-scores");
highScores.style.display = "none";

// Global variable for time (60 seconds).
let secondsLeft = 60;

// The start button being clicked begins the countDown and displayQuestions functions.
startButton.addEventListener("click", function () {
    countDown();
    displayQuestions();
    // Hide the start button
    startButton.style.display = "none";
    yourScore.style.display = "flex";
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

// This function displays the questions from the array and presents the answers.
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
                // ...add 10 points to the score.
                currentPoints += 10;
                // ...display the total current points.
                pointsCounter.textContent = currentPoints;
                // ...if the questionIndex is less than the length of the questionArray...
                if (questionIndex < questionArray.length-1) {
                    // ...increment the questionIndex.
                    questionIndex++;
                    // ...clear the showAnswers section.
                    showAnswers.innerHTML = '';
                    // ...display the next question.
                    console.log("Testing, 1, 2, 3...");
                    displayQuestions();
                // If the questionIndex is not less than the length of the questionArray, end the game.
                } else {
                    // Show scoreboard
                    pointsCounter.textContent = currentPoints;
                    // End the game.
                    secondsLeft = 0;
                    timeLeft.textContent = 'Sorry, there is no time left! Click "Done" to view your score.';
                    // displayQuestions();
                }
            // If the submission is not equal to Correct...
            } else {
                // ...show this error message and...
                results.textContent = "Negative, Ghost Rider. That's incorrect.";
                // ...if the questionIndex is less than the length of the questionArray...
                if (questionIndex < questionArray.length-1) {
                    // ...increment the questionIndex.
                    questionIndex++;
                    // ...deduct 10 seconds from the clock.
                    secondsLeft -= 10;
                    // ...clear the showAnswers section.
                    showAnswers.innerHTML = '';
                    // ...display the next question.
                    displayQuestions();
                // If the questionIndex is not less than the length of the questionArray, end the game.
                } else {
                    // Show scoreboard
                    pointsCounter.textContent = currentPoints;
                    // End the game.
                    secondsLeft = 0;
                    timeLeft.textContent = '';
                }
            }
        };
        showAnswers.appendChild(answerButton);
        
    }
    console.log(displayQuestions);
}

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// Present an alert or show that time is up

// WHEN the game is over
// THEN I can save my initials and score
// Then, show the score and ability to input user initials in local storage