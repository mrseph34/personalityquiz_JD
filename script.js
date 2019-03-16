let Procrast = null;
let DayWork = null;
let HS = null;
let Exercise = null;
let Distract = null;
let Notes = null;
let Goals = null;
let Pick = null;
let Done = null;
let WYR = null;
let Would = null;
let pageTitle = document.getElementById("head");
let pageTitleText = pageTitle.innerHTML;
let tryAgain = document.getElementById("try-again");
let quizWrapper = document.getElementById("Quiz-Wrapper");
let formSubmit = document.getElementById("submit");
let result = document.getElementById("result");

function processResult(){
    
    console.log("This is the processResults function")
}

function getPersonality(){
    
    console.log("This is the getPersonality function")
}

function resetQuiz(){
    
    console.log("This is the resetQuiz function")
    
}

tryAgain.addEventListener.click(resetQuiz);
formSubmit.addEventListener.click(processResult);