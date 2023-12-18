// Question 1
// Inside which HTML element do we put the JavaScript?
// <javascript>
// <scripting>
// <script>
// <js>

// Question 2
// Where is the correct place to insert a JavaScript?
// <head> and <body> section
// <body> section
// <head> section

// Question 3
// The external JavaScript file must contain the <script> tag.
// True
// False


// Function for showing the questions to the user so that they are able to select the answer

function showQuestions(questions, quizContainer) {
    // place to store the output and the answer choices
    var output = []
    var answer;

    // for each question
    for(var i=0; i<questions.length; i++){
        // reset the list of answers
        answers = [];

        // for each availabe answer to this question
        for(letter in questions[i].answers) {

            // add an html to radio button
            answers.push(
                '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
            );
        }
        // add this question and its answers to the output
        output.push(
            '<div class = "question">' + questions[i].question + '</div>'
            + '<div class = "answers">' + answers.join('') + '</div>'
        );
    }

// combine output list into one string of html + put on page
quizContainer.innerHTML = output.join('');

}

function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// on submit, show results
submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}