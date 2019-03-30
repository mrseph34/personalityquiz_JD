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

// OPEN AND CLOSE
function open1() {
  var x = document.getElementById("1");
    var y = document.getElementById("Procrast")
  if (y.style.display === "none") {
    y.style.display = "block";
      x.innerHTML = "▲How often do you procrastinate?"
  } else {
    y.style.display = "none";  
      x.innerHTML = "▼How often do you procrastinate?"
  }
}
function open2() {
  var x = document.getElementById("2");
    var y = document.getElementById("DayWork")
  if (y.style.display === "none") {
    y.style.display = "block";
      x.innerHTML = "▲How many days of the week would you work at most?"
  } else {
    y.style.display = "none";  
      x.innerHTML = "▼How many days of the week would you work at most?"
  }
}
function open3() {
  var x = document.getElementById("3");
    var y = document.getElementById("HS")
  if (y.style.display === "none") {
    y.style.display = "block";
      x.innerHTML = "▲Do you consider yourself a hard or smart worker?"
  } else {
    y.style.display = "none";  
      x.innerHTML = "▼Do you consider yourself a hard or smart worker?"
  }
}
function open4() {
  var x = document.getElementById("4");
    var y = document.getElementById("Exercise")
  if (y.style.display === "none") {
    y.style.display = "block";
      x.innerHTML = "▲How ofter do you exercise?"
  } else {
    y.style.display = "none";  
      x.innerHTML = "▼How ofter do you exercise?"
  }
}
function open5() {
  var x = document.getElementById("5");
    var y = document.getElementById("Distract")
  if (y.style.display === "none") {
    y.style.display = "block";
      x.innerHTML = "▲Do you get distracted while working?"
  } else {
    y.style.display = "none";  
      x.innerHTML = "▼Do you get distracted while working?"
  }
}
function open6() {
  var x = document.getElementById("6");
    var y = document.getElementById("Notes")
  if (y.style.display === "none") {
    y.style.display = "block";
      x.innerHTML = "▲Where do you keep your notes?"
  } else {
    y.style.display = "none";  
      x.innerHTML = "▼Where do you keep your notes?"
  }
}
function open7() {
  var x = document.getElementById("7");
    var y = document.getElementById("Goals")
  if (y.style.display === "none") {
    y.style.display = "block";
      x.innerHTML = "▲Do you meet your set goals"
  } else {
    y.style.display = "none";  
      x.innerHTML = "▼Do you meet your set goals"
  }
}
function open8() {
  var x = document.getElementById("8");
    var y = document.getElementById("Pick")
  if (y.style.display === "none") {
    y.style.display = "block";
      x.innerHTML = "▲Pick one"
  } else {
    y.style.display = "none";  
      x.innerHTML = "▼Pick one"
  }
}
function open9() {
  var x = document.getElementById("9");
    var y = document.getElementById("Done")
  if (y.style.display === "none") {
    y.style.display = "block";
      x.innerHTML = "▲Do you make sure something is done well of fast?"
  } else {
    y.style.display = "none";  
      x.innerHTML = "▼Do you make sure something is done well of fast?"
  }
}
function open10() {
  var x = document.getElementById("10");
    var y = document.getElementById("WYR")
  if (y.style.display === "none") {
    y.style.display = "block";
      x.innerHTML = "▲Would You Rather"
  } else {
    y.style.display = "none";  
      x.innerHTML = "▼Would You Rather"
  }
}
function open11() {
  var x = document.getElementById("11");
    var y = document.getElementById("Would")
  if (y.style.display === "none") {
    y.style.display = "block";
      x.innerHTML = "▲If you had a powerful ability you would?"
  } else {
    y.style.display = "none";  
      x.innerHTML = "▼If you had a powerful ability you would?"
  }
}

let Hisoka ={
    "pro1":1,
    "day4":1,
    "hs3":1,
    "ex4":1,
    "dis2":1,
    "no2":1,
    "go1":1,
    "pi2":2,
    "do1":1,
    "wr3":1,
    "wo3":1,
}
let Deku ={
    "pro4":1,
    "day1":1,
    "hs4":1,
    "ex2":1,
    "dis4":1,
    "no1":1,
    "go2":1,
    "pi3":1,
    "do4":1,
    "wr2":1,
    "wo2":1,
}