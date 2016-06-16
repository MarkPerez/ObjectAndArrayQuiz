
var event1 = document.getElementById("button1");
event1.addEventListener('click', next, false);

var event2 = document.getElementById("button2");
event2.addEventListener('click', submit, false);

var quizQuestions = [];

var quizAnswers = ["C", "B", "A", "C", "B"];

var i = -1;
var j = -1;

var correctAnswers = 0;

function Question(text, optionA, optionB, optionC){
    this.text = text;
    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
} 

var firstQuestion = new Question("Which is the closest planet to Earth?", "A) Mercury", "B) Venus", "C) Mars");

var secondQuestion = new Question("How many planets are there in the Solar System?", "A) 7", "B) 8", "C) 9");

var thirdQuestion = new Question("Which is the biggest planet in the Solar System?", "A) Jupiter", "B) Saturn", "C) Neptune");

var fourthQuestion = new Question("Which of these is NOT a moon of Jupiter?", "A) Ganymede", "B) Europa", "C) Titan");

var fifthQuestion = new Question("What is Ceres?", "A) Moon", "B) Dwarf Planet", "C) Asteroid");

quizQuestions.push(firstQuestion);
quizQuestions.push(secondQuestion);
quizQuestions.push(thirdQuestion);
quizQuestions.push(fourthQuestion);
quizQuestions.push(fifthQuestion);

//document.getElementById("demo").innerHTML = quizQuestions;

function next(){
    text = "";
    i++;
    for (; i < quizQuestions.length; ) {
        text += quizQuestions[i].text + "<br>" + quizQuestions[i].optionA + "<br>" + quizQuestions[i].optionB + "<br>" + quizQuestions[i].optionC + "<br>" + "<br>";
        document.getElementById("demo").innerHTML = text;
        break;
    }
}

function submit(){
    j++;
/*    for (; j < quizAnswers.length; ) {
        if (document.getElementById("answers").value == quizAnswers[j]) {
            correctAnswers++;
            document.getElementById("answers").reset();
            }
        else {
            document.getElementById("answers").reset();
        }
        document.getElementById("results").innerHTML = correctAnswers;
        break;
    }*/
    //var input = document.getElementById("answers").radioValue;
    document.getElementById("results").innerHTML = "test";
}
