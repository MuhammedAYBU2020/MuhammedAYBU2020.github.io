var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
};

function displayResults() {
	var average = 0;
	var highestScore = 0;
	var highestPerson = "";

	for(var i = 0;i < scores.length;i++) {
		average = (average * (i) + scores[i]) / (i+1);

		if(scores[i] > highestScore) {
			highestScore = scores[i];
			highestPerson = names[i];
		}
	}
	
	// I removed the <br/> in front of the Average Score. Because the article starts far below the h2 tag.
	document.getElementById("results").innerHTML = "<h2> Results </h2>" + " Average score = " + average + "<br \> " + "High score = " + highestPerson + " with a score of " + highestPerson;
}

function displayScores() {
    var scoreTable = '<tr>' + '<td>' + '<b>Name</b>' + '</td>' + '<td>' + '<b>Score</b>' + '</td>' + '</tr>';
	
	for (var i = 0; i < names.length; i++) {
		scoreTable += '<tr>' + '<td>' + names[i] + '</td>' + '<td>' + scores[i] + '</td>' + '</tr>';
	}

	document.getElementById("scores_table").innerHTML = "<h2> Scores </h2>" + scoreTable;
}

function addScore() {
	const nameInput = $("name");
	const scoreInput = $("score");
	const name = nameInput.value;
	const score = parseInt(scoreInput.value);

	var isNameEmpty = (name === "");
	var isScoreEmpty = (isNaN(score));
	var isScoreGreater = (score > 100);
	var isScoreLess = (score < 0);

	if (isNameEmpty || isScoreEmpty || isScoreGreater || isScoreLess) {
		alert("You must enter a name and a valid score");
	}
	else {
		names.push(name);
		scores.push(score);
		nameInput.value = "";
		scoreInput.value = "";
		nameInput.focus();
	}
}