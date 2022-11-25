const num1 = Math.ceil(Math.random() * 10) + 5,
      num2 = Math.ceil(Math.random() * 5),
	  mathQuestion = document.getElementById("question-line"),
	  userAnswer = document.getElementById("input-answer"),
	  submitAnswer = document.getElementById("form"),
	  userScore = document.getElementById("math-score"),
	  mathType = document.getElementById("math-type");

let score = JSON.parse(localStorage.getItem("math-score"));

if (!score) {
	score = 0;
}

userScore.innerText = `score: ${score}`;

mathQuestion.innerText = `${num1} : ${num2} = ?`;

const multiAns = num1 / num2;

submitAnswer.addEventListener("submit", () => {
	const userAns = +userAnswer.value;
	if (userAns === multiAns) {
		score++;
		updateLocalStorage();
	} else {
		if (score <= 0) {
			score = 0;
		} else {
			score--;
		}
		updateLocalStorage();
	}
	
});

function updateLocalStorage() {
	localStorage.setItem("math-score", JSON.stringify(score));
}
