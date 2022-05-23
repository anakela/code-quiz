// GIVEN I am taking a code quiz - TIMER FOR EACH QUESTION NOT NECESSARY; CAN BE FOR ENTIRE QUIZ

// An array of objects containing questions, answers, and the correct answers.
const questionArray = [
    {
        Q: "To stop a setInterval() method, you would use the ________________ method.",
        A: [
            "setInterval()",
            "splice()",
            "clearInterval()",
            "setTimeout()"
        ],
        Correct: "clearInterval()"
    },
    {
        Q: "The eventTarget.addEventListener() method takes the following parameters: ___________________.",
        A: [
            "type, listener",
            "type, listener, options",
            "type, listener, useCapture",
            "All options are correct."
        ],
        Correct: "All options are correct."
    },
    {
        Q: "JavaScript is _________________.",
        A: [
            "another way of referring to Cascading Style Sheets",
            "a scripting or programming language that allows you to implement complex features on web pages",
            "a movie script that smells and tastes like coffee",
            "the same thing as the Java language"
        ],
        Correct: "a scripting or programming language that allows you to implement complex features on web pages"
    },
    {
        Q: "JavaScript data types include _______________, number, boolean, object, and undefined.",
        A: [
            "string",
            "null",
            "var",
            "text"
        ],
        Correct: "string"
    },
    {
        Q: "Another version of JavaScript that can be used in its place is _____________.",
        A: [
            "Bootstrap",
            "GitHub",
            "bubbling",
            "jQuery"
        ],
        Correct: "jQuery"
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

let submitForm = document.querySelector("#scores-form");
submitForm.style.display = "none";

let initsInput = document.querySelector("#inits");

let viewScores = document.querySelector("#view-scores");

// submitButton is equivalent to the "done" button.
let submitButton = document.querySelector("#submit");
// Initially hide the submitButton.
// submitButton.style.display = "none";


// endGame is equivalent to the "end game" h2 tag.
let endGame = document.querySelector("#end-game");
// Initially hide the endGame h2 tag.
// endGame.style.display = "none";
// Initially hide the High Scores aside.
let highScores = document.querySelector("#high-scores");
highScores.style.display = "none";

let viewHighScores = document.querySelector("#view-high-scores");

// Global array for objects
let highScoreArr;

// Global variable for time (60 seconds).
let secondsLeft = 30;

// The start button being clicked begins the countDown and displayQuestions functions.
startButton.addEventListener("click", function () {
    countDown();
    displayQuestions();
    // endTheGame();
    // Hide the start button
    startButton.style.display = "none";
    yourScore.style.display = "flex";
});

// The countDown function sets a timer that ticks down once per second until the seconds reach 0.
function countDown() {
    let timer = setInterval(function () {
        timeLeft.textContent = secondsLeft + " seconds left to finish the quiz!";
        secondsLeft--;

        if (secondsLeft <= 0 || questionIndex === questionArray.length) {
            // If the seconds left are <= 0, show this message:
            timeLeft.textContent = 'Nice work! Click the button below to view your score.';
            showQuestions.style.display = "none";
            showAnswers.style.display = "none";
            results.style.display = "none";
            submitForm.style.display = "block";
            // submitButton.style.display = "inline-block";
            // Clear the timer once there's no time left.
            clearInterval(timer);
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
                if (questionIndex < questionArray.length) {
                    // ...increment the questionIndex.
                    questionIndex++;
                    // ...clear the showAnswers section.
                    showAnswers.innerHTML = '';
                    // ...display the next question.
                    displayQuestions();
                    // If the questionIndex is not less than the length of the questionArray, end the game.
                } else {
                    // Show scoreboard
                    pointsCounter.textContent = currentPoints;
                    // End the game.
                    // secondsLeft = 0;
                    // timeLeft.textContent = 'Nice work! Click "Done" to enter your score.';
                    // endTheGame();
                    // displayQuestions();
                }
                // If the submission is not equal to Correct...
            } else {
                // ...show this error message and...
                results.textContent = "Negative, Ghost Rider. That's incorrect.";
                // ...if the questionIndex is less than the length of the questionArray...
                if (questionIndex < questionArray.length) {
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
                    // secondsLeft = 0;
                    // timeLeft.textContent = 'Nice work! Click the button below to enter your score.';
                    // timeLeft.textContent = '';
                    // endTheGame();
                }
            }
        }
        showAnswers.appendChild(answerButton);

    }
    console.log(displayQuestions);
}



// End the game when either the clock runs out, or the user goes through all questions.

submitButton.onclick = function storeScores(event) {
    event.preventDefault();
    // Create an object to store initials and scores
    let userScores = {
        initials: initsInput.value,
        score: currentPoints
    };

    // Parse data in localStorage in my highScoreArr array.
    highScoreArr = JSON.parse(localStorage.getItem("userScores"));
    console.log(highScoreArr);
    if (highScoreArr === null) {
        highScoreArr = [userScores];
    } else {
        for (let i = 0; i < highScoreArr.length; i++) {
            if (userScores.score >= highScoreArr[i].score) {
                highScoreArr.splice(i, 0, userScores);
                break;
            } else if (i === highScoreArr.length-1 && userScores.score < highScoreArr[i]) {
                highScoreArr.push(userScores);
                break;
            }
        }
    }

    console.log(highScoreArr);
    // Store the initials and score in the object.
    localStorage.setItem("userScores", JSON.stringify(highScoreArr));
    // Clear the initials input field.
    initsInput.value = '';
}

viewScores.onclick = function (event) {
    event.preventDefault();
    let highScoreArr2 = JSON.parse(localStorage.getItem("userScores"));
    viewHighScores.innerHTML = highScoreArr2;
    console.log(highScoreArr2[0].initials);
    let scoreLineItem = document.createElement("li");
    scoreLineItem.textContent(`${highScoreArr2[0].initials}: ${highScoreArr2[0].score}`);
    results.appendChild(scoreLineItem);
    highScores.style.display = "flex";
}

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// Present an alert or show that time is up

// WHEN the game is over
// THEN I can save my initials and score
// Then, show the score and ability to input user initials in local storage