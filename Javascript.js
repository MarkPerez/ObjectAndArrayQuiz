
var event1 = document.getElementById("button1");
event1.addEventListener('click', submit, false);

var quizQuestions = [];

var correctAnswers = 0;

function Question(text, optionA, optionB, optionC){
    this.text = text;
    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
} 

var firstQuestion = new Question("What is the closest planet to Earth?", "Mercury", "Venus", "Mars");

var secondQuestion = new Question("How many planets are there in the Solar System?", "7", "8", "9");

var thirdQuestion = new Question("Which is the biggest planet?", "Jupiter", "Saturn", "Neptune");

var fourthQuestion = new Question("Which of these is NOT a moon of Jupiter?", "Ganymede", "Europa", "Titan");

var fifthQuestion = new Question("What is Ceres?", "Moon", "Dwarf Planet", "Asteroid");

quizQuestions.push(firstQuestion);
quizQuestions.push(secondQuestion);
quizQuestions.push(thirdQuestion);
quizQuestions.push(fourthQuestion);
quizQuestions.push(fifthQuestion);

//document.getElementById("demo").innerHTML = quizQuestions;

function submit(){
    text = "";
    for (i = 0; i < quizQuestions.length; i++) {
        text += quizQuestions[i].text + "<br>" + quizQuestions[i].optionA + "<br>" + quizQuestions[i].optionB + "<br>" + quizQuestions[i].optionC + "<br>" + "<br>";
        document.getElementById("demo").innerHTML = text;
        
        
    }
    
}