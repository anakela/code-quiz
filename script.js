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

// startGame equals the the "start-game" section.
let startGame = document.querySelector("#start-game");
// startButton is equal to elements with the "start" class.  Here, button.
let startButton = document.querySelector("#start");
// timeLeft is equal to elements with the "time=left" class.  Here, the h2 tag.
let timeLeft = document.querySelector("#time-left");
// showQuestions is equal to elements with the "show-questions" class.  Here, a section.
let showQuestions = document.querySelector("#show-questions");
// showAnswers is equal to the elements in the "show-answers" class.  Here, a section.
let showAnswers = document.querySelector("#show-answers");

// asideContainer is equal to the aside in the HTML file.
let asideContainer = document.querySelector(".container");
// Initially hide the aside.
asideContainer.style.display = "none";

// yourScore is equal to the "scores" class.  Here, aside > div.
let yourScore = document.querySelector("#your-score");
// Initially hide the Your Scores aside.
yourScore.style.display = "none";

// highScores is equal to the "high-scores" id.  Here, aside > div.
let highScores = document.querySelector("#high-scores");
// Initially hide the High Scores aside.
highScores.style.display = "none";

// pointsCounter is equal to the "points-counter" span.
let pointsCounter = document.querySelector("#points-counter");
// Set current points to zero.
let currentPoints = 0;
// results is equal to the "results" id.  Here, aside > p.
// let results = document.querySelector("#results");

// submitForm is equal to the "scores-form" form.
let submitForm = document.querySelector("#scores-form");
// Initially hide the scores form.
submitForm.style.display = "none";

// initsInput is equal to the initials input in the form.
let initsInput = document.querySelector("#inits");
// submitButton is equal to the "done" button.
let submitButton = document.querySelector("#submit");
// Hide the form initially.
submitForm.style.display = "none";

// otherButtons is equal to the "other-buttons" section.
let otherButtons = document.querySelector("#other-buttons");
// Initially hide the "other-buttons" section.
otherButtons.style.display = "none";

// Buttons in the "other-buttons" section.
let viewScores = document.querySelector("#view-scores");
let tryAgain = document.querySelector("#try-again");

// viewHighScores is equal to the view-high-scores ordered list.
let viewHighScores = document.querySelector("#high-scores-list");

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
    document.getElementById("desc").style.display = "none";
    asideContainer.style.display = "flex";
    yourScore.style.display = "block";
    // yourScore.style.display = "flex";
    // otherButtons.style.display = "flex";
});

// The countDown function sets a timer that ticks down once per second until the seconds reach 0.
function countDown() {
    let timer = setInterval(function () {
        timeLeft.textContent = secondsLeft + " seconds left to finish the quiz!";
        secondsLeft--;

        if (secondsLeft <= 0 || questionIndex === questionArray.length) {
            // If the seconds left are <= 0, show this message:
            timeLeft.textContent = 'Nice work! Record and submit your score below.';
            showQuestions.style.display = "none";
            showAnswers.style.display = "none";
            results.style.display = "none";
            submitForm.style.display = "block";
            otherButtons.style.display = "inline-block";
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
                }
            }
        }
        showAnswers.appendChild(answerButton);

    }
    console.log(displayQuestions);
}

// Store the scores in localStorage when the "Submit" button is clicked.
submitButton.onclick = function storeScores(event) {
    event.preventDefault();
    // Create an object to store initials and scores
    let userScores = {
        initials: initsInput.value,
        score: currentPoints
    };

    // Parse data in localStorage in my highScoreArr array.
    highScoreArr = JSON.parse(localStorage.getItem("userScores"));
    // console.log(highScoreArr);
    if (highScoreArr === null) {
        highScoreArr = [userScores];
    } else {
        for (let i = 0; i < highScoreArr.length; i++) {
            if (userScores.score >= highScoreArr[i].score) {
                highScoreArr.splice(i, 0, userScores);
                break;
            } else if (i === highScoreArr.length - 1 && userScores.score < highScoreArr[i].score) {
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
    startGame.style.display = "none";
    // timeLeft.style.display = "none";
    submitForm.style.display = "none";
    results.textContent = '';
    // timeLeft.textContent = 'Click the "Start" button to begin the quiz.';
}

// View the high scores when the "View Scores" button is clicked.
viewScores.onclick = function () {
    let highScoreArr2 = JSON.parse(localStorage.getItem("userScores"));
    // viewHighScores.innerHTML = highScoreArr2;
    for (let i = 0; i < 10 && i < highScoreArr2.length; i++) {
        // Create list items for the scores.
        let scoreLineItem = document.createElement("li");
        // Replace the text content of the scoreLineItem with the submitted initials and scores.
        scoreLineItem.textContent = (`${highScoreArr2[i].initials}: ${highScoreArr2[i].score}`);
        // Append the scores to the view-high-scores unordered list.
        viewHighScores.appendChild(scoreLineItem);
    }
    // Display the high scores ordered list as a block.
    highScores.style.display = "block";
    viewScores.style.display = "none";
    tryAgain.style.display = "inline-block";
}

// Refresh the page to try the quiz again.
tryAgain.onclick = function reload() {
    reload = location.reload();
}