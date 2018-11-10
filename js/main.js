// array of questions and answers
var questions = [
	{
		question: "Who is Naruto's son?",
		answer: "Boruto"
},
{
		question: "Who was Sasuke's brother?",
		answer: "Itachi Uchiha"
},
{
		question: "Who was really Tobi?",
		answer: "Obito"
},
{
		question: "Who did Naruto use to like?",
		answer: "Sakura"
},
{
		question: "What is Rock Lee's specialty",
		answer: "Taijutsu"
},
{
		question: "Was Kakashi hokage?",
		answer: "Yes"
},
{
		question: "Who is Naruto married to?",
		answer: "Hinata"
},
{
		question: "What is Sasuke's last name?",
		answer: "Uchiha"
},
{
		question: "How many are on team 7?",
		answer: 3
	},
	{
		question: "What is Naruto's latest known status?",
		answer: "Hokage"
	}
];

// Loop through each questions
for(var i = 0; i < questions.length; i++) {
	// store each question value
	var question = questions[i].question;
	// store each element to add question too
	var el = document.getElementById('question' + [i]);

	// check what question and element is being selected
	console.log(question, el);

	// update text content of each element
	el.textContent = question;
}

// check results when the user submits quiz
function testResults() {
	// store variables to update correct and incorrect totals
	var correct = 0;
	var incorrect = 0;

	// loop through questions array
	for(var i = 0; i < questions.length; i++) {
		// store each correct answer
		var answer = questions[i].answer;
		// store each user answer
		var guess = document.getElementById('answer' + [i]).value;
		// store element to add a class if correct or incorrect
		var questionSpot = document.getElementById('question' + [i]);

		// check if the user answer matches the correct answer
		if(answer == guess) {
			// update class on questionSpot
			questionSpot.className ='correct';
			// add one to correct
			correct++;
		} else {
			// update class on questionSpot
			questionSpot.className = 'incorrect';
			// add one to incorrect
			incorrect++;
		};
	};
	// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}