// Function for pressing 'Start Button'
var buttonStart = document.getElementById('start').addEventListener('click', buttonClick);


// counter function
function startCountdown() {
    var timeInSeconds = 120;
    var timerElement = document.getElementById("timer");
    var countdown = setInterval(function() {
        timerElement.textContent = timeInSeconds;
        timeInSeconds--;
        if (timeInSeconds < 0) {
            clearInterval(countdown);
            timerElement.textContent = "Time's up!";
        }
    }, 1000);
}

function buttonClick() {  
  console.log('start button pressed');
}

// if (buttonClick) {
//     startCountdown
// }

// Direct User to the next page upon clicking the button - array of questions as a variable
var quizQuestions = [

    // Question 1
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: {
            a:'<javascript>',
            b:'<scripting>',
            c:'<script>',
            d:'<js>'
        }, correctAnswer: 'b'
    },


    // Question 2
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: {
            a:'<head> and <body> section',
            b:'<body> section',
            c:'<head> section'
        }, correctAnswer: 'a'
    },


    // Question 3
    {
        question: 'The external JavaScript file must contain the <script> tag',
        answers: {
            a:'True',
            b:'False'
        }, correctAnswer: 'a'
    },

];

