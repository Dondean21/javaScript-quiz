var startTime;
var startButton;
var c = "correct";
var w = "wrong";

// var n = 0;
// n++;
// var s = 0;
// s++;

var seconds;

function begin001() {
  seconds = 75;

  disappear.innerHTML = "";
  disappear1.innerHTML = "";
  disappear2.innerHTML = "";
  title.innerHTML = questions[0];
  option1.innerHTML = a1[0];
  option2.innerHTML = a2[0];
  option3.innerHTML = a3[0];
  option4.innerHTML = a4[0];
//   n++;
}

function q1c() {
  answer.innerHTML = "<div id = green>" + c + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = nextButton onClick = quest2()> next question</button>";
  finalScore.innerHTML = s++;
}

function q1w() {
  answer.innerHTML = "<div id = red>" + w + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = nextButton onClick = quest2()> next question</button>";
    seconds = seconds-15;
}

function quest2() {
  title.innerHTML = questions[1];
  option1.innerHTML = a1[1];
  option2.innerHTML = a2[1];
  option3.innerHTML = a3[1];
  option4.innerHTML = a4[1];
  answer.innerHTML = "";
  next1.innerHTML = "";
//   n++;
}

function q2c() {
  answer.innerHTML = "<div id = green>" + c + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = nextButton onClick = quest3()> next question</button>";
    // finalScore.innerHTML = s++;
}

function q2w() {
  answer.innerHTML = "<div id = red>" + w + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = nextButton onClick = quest3()> next question</button>";
    seconds = seconds-15;
}

function quest3() {
  title.innerHTML = questions[2];
  option1.innerHTML = a1[2];
  option2.innerHTML = a2[2];
  option3.innerHTML = a3[2];
  option4.innerHTML = a4[2];
  answer.innerHTML = "";
  next1.innerHTML = "";
//   n++;
}

function q3c() {
  answer.innerHTML = "<div id = green>" + c + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = nextButton onClick = quest4()> next question</button>";
    // finalScore.innerHTML = s++;
}

function q3w() {
  answer.innerHTML = "<div id = red>" + w + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = nextButton onClick = quest4()> next question</button>";
    seconds = seconds-15;
}

function quest4() {
  title.innerHTML = questions[3];
  option1.innerHTML = a1[3];
  option2.innerHTML = a2[3];
  option3.innerHTML = a3[3];
  option4.innerHTML = a4[3];
  answer.innerHTML = "";
  next1.innerHTML = "";
//   n++;
}

function q4c() {
  answer.innerHTML = "<div id = green>" + c + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = nextButton onClick = quest5()> next question</button>";
    // finalScore.innerHTML = s++;
}

function q4w() {
  answer.innerHTML = "<div id = red>" + w + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = nextButton onClick = quest5()> next question</button>";
    seconds = seconds-15;
}

function quest5() {
  title.innerHTML = questions[4];
  option1.innerHTML = a1[4];
  option2.innerHTML = a2[4];
  option3.innerHTML = a3[4];
  option4.innerHTML = a4[4];
  answer.innerHTML = "";
  next1.innerHTML = "";
//   n++;
}

function q5c() {
  answer.innerHTML = "<div id = green>" + c + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = nextButton onClick = window.open('highscores.html')> end of quiz</button>";

    // finalScore.innerHTML = s++;
}

function q5w() {
  answer.innerHTML = "<div id = red>" + w + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = nextButton onClick = window.open('highscores.html')> end of quiz</button>";
    seconds = seconds-15;
}

function startTimer(){
    seconds = seconds -1;
    if (seconds < 75){
    time.innerHTML = seconds;
    }
    if (seconds < 1){
        window.clearInterval(update);
        title.innerHTML = "";
option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = nextButton onClick = window.open('highscores.html')> end of quiz</button>";
    } 
}
update = setInterval("startTimer()",1000);





