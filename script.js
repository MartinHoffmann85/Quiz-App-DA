let questions = [
    {
        "question": "Welche der folgenden Code-Zeilen ersetzt den Buchstaben 'm' durch den Buchstaben 'n' in einem String?",
        "answer_1": `.substitute("m", "n")`,
        "answer_2": `.switch("m", "n")`,
        "answer_3": `.replace("m", "n")`,
        "answer_4": `.replace_char("m", "n")`,
        "right_answer": 3
    },

    {
        "question": "Was sind davon Datentypen?",
        "answer_1": "Color, Font-Size, Margin, Padding",
        "answer_2": "String, Bolean, Float, Intiger",
        "answer_3": "Path, ./, cd ..., ../",
        "answer_4": "Github, Bootstrap, Angular, Chat GPT",
        "right_answer": 2
    },

    {
        "question": "Was sind Operatoren?",
        "answer_1": "+, - , &&, ==",
        "answer_2": "tostring(), tofixed(2), splice, slice",
        "answer_3": "constructor, decorator, patterns, frameworks",
        "answer_4": "UDP, TCP, FTP, IPv6",
        "right_answer": 1
    },

    {
        "question": "Was ist ein Framework?",
        "answer_1": "Ein Feuerwerkskörper",
        "answer_2": "Ein Fensterarbeiter",
        "answer_3": "Jemand der von zu hause aus arbeitet",
        "answer_4": "Ein Gerüst, z.B. Angular für Web Entwicklung",
        "right_answer": 4
    },

    {
        "question": "Wozu verwendet man .toFixed(2)?",
        "answer_1": "Um ein Problem zu beheben",
        "answer_2": "Um 2 Parameter im localStorage zu speichern",
        "answer_3": "Um eine Zahl, nach dem Komma mit z.B. 2 nachkomma stellen an zu geben",
        "answer_4": "Um 2 Variablen ab zu rufen",
        "right_answer": 3
    },
];

let currentQuestion = 0;
let selectedAnswer;
let selectedIdOfRightAnswer;
let question = 0;
let CurrentQuestionCounter = 1;
let rightGivenAnswers = 0;
let idOfRightAnswer = `${questions['right_answer']}`;



function init() {
    generateQuestionCounter();
    showQuestion();
    showAnswer();
}

function generateQuestionCounter() {
   document.getElementById("questionCounterId").innerHTML = questions.length;
   document.getElementById("CurrentQuestionCounterId").innerHTML = CurrentQuestionCounter;
}

function generateCurrentQuestionCounter() {
    CurrentQuestionCounter++;
 }

 function showQuestion() {
    if (currentQuestion >= questions.length) {
        // Show end screen
        document.getElementById('endScreenId').style = '';
        document.getElementById('questionBodyId').style = 'display: none';
        document.getElementById('QuestionMarkImgId').style = 'display: none';
        document.getElementById('rightAnswersCounterId').innerHTML = `
            Du hast <b>${rightGivenAnswers}</b> Fragen von <b>${questions.length}</b> richtig beantwortet.
        `;
        document.getElementById('restartGameButtonId').style = '';
    } else { // Show question
        question = questions[currentQuestion];
        document.getElementById("questionTextId").innerHTML = question['question'];
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progressBarId').innerHTML = `${percent} %`;
        document.getElementById('progressBarId').style.width = `${percent}%`;
    }
}

function showAnswer() {
    question = questions[currentQuestion];
    document.getElementById("answer_1_Id").innerHTML = question['answer_1'];
    document.getElementById("answer_2_Id").innerHTML = question['answer_2'];
    document.getElementById("answer_3_Id").innerHTML = question['answer_3'];
    document.getElementById("answer_4_Id").innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion]; 
    let selectedQuestionNumber = selection.slice(-1);
    idOfRightAnswer = `${question['right_answer']}`;
    selectedAnswer = selection
    selectedIdOfRightAnswer = idOfRightAnswer;
      
    if(selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!');        
        document.getElementById(selection + "_Id").parentNode.classList.add('bg-success');
        rightGivenAnswers++;
    } else {
        console.log('Falsche Antwort!');
        document.getElementById(selection + "_Id").parentNode.classList.add('bg-danger');
        document.getElementById("answer_" + idOfRightAnswer + "_Id").parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button-Id').disabled = false;    
}

function nextQuestion() {
    if (CurrentQuestionCounter == 5) {
        // Alle Fragen beantwortet
        document.getElementById('next-button-Id').disabled = true;
        document.getElementById('restartGameButtonId').style.display = 'block';
        document.getElementById('quizEndTextId').style.display = `block`;
        document.getElementById('questionBodyId').style.display = `none`;
        document.getElementById('rightAnswersCounterId').style = `block`;
        document.getElementById('rightAnswersCounterId').innerHTML = `
            Du hast <b>${rightGivenAnswers}</b> Fragen von <b>${questions.length}</b> richtig beantwortet.
        `;
        document.getElementById('endScreenId').style = '';
        document.getElementById('QuestionMarkImgId').style = 'display: none';
    } else {
        currentQuestion++;
        question++;
        selection = selectedAnswer;
        idOfRightAnswer = selectedIdOfRightAnswer;
        showQuestion();
        document.getElementById('next-button-Id').disabled = true;
        document.getElementById(selection + "_Id").parentNode.classList.remove('bg-danger');
        document.getElementById("answer_" + idOfRightAnswer + "_Id").parentNode.classList.remove('bg-success');
        showAnswer();
        generateCurrentQuestionCounter();
        generateQuestionCounter();
    }
}

function restartGame() {
    document.getElementById('endScreenId').style = 'display: none';
    document.getElementById('QuestionMarkImgId').style = '';
    document.getElementById('restartGameButtonId').style = 'display: none';
    document.getElementById('next-button-Id').disabled = false;
    document.getElementById('quizEndTextId').style = `display: none`;
    document.getElementById('rightAnswersCounterId').style = `display: none`;
    document.getElementById('questionBodyId').style.display = `block`;
    document.getElementById(selection + "_Id").parentNode.classList.remove('bg-danger');
    document.getElementById("answer_" + idOfRightAnswer + "_Id").parentNode.classList.remove('bg-success');
    document.getElementById('next-button-Id').disabled = true;
    document.getElementById('rightAnswersCounterId').innerHTML = `
            Du hast <b>${rightGivenAnswers}</b> Fragen von <b>${questions.length}</b> richtig beantwortet.
        `;

    currentQuestion = 0;
    selectedAnswer;
    selectedIdOfRightAnswer;
    question = 0;
    CurrentQuestionCounter = 1;
    rightGivenAnswers = 0;    
    init();
}