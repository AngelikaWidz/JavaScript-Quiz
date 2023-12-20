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
var quizQuestions1 = document.querySelector('#choices1 .btn-grid1');
console.log(quizQuestions1);

