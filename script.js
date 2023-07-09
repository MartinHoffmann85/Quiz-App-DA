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
    if (CurrentQuestionCounter >= questions.length) {
        // Todo show end screen
        document.getElementById('endScreenId').style = '';
        document.getElementById('questionBodyId').style = 'display: none';
    } else {
        question = questions[currentQuestion];
        document.getElementById("questionTextId").innerHTML = question['question'];
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
    let idOfRightAnswer = `${question['right_answer']}`;
    selectedAnswer = selection
    selectedIdOfRightAnswer = idOfRightAnswer;
      
    if(selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!');        
        document.getElementById(selection + "_Id").parentNode.classList.add('bg-success');
    } else {
        console.log('Falsche Antwort!');
        document.getElementById(selection + "_Id").parentNode.classList.add('bg-danger');
        document.getElementById("answer_" + idOfRightAnswer + "_Id").parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button-Id').disabled = false;    
}

function nextQuestion() {
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

