var min=0;
var sec=0;
var msec=0;
var minHead=document.getElementById("min");
var secHead=document.getElementById("sec");
var msecHead=document.getElementById("msec");
var main=document.getElementById("main");
var interval;

function timer()
{
    msec++
    msecHead.innerHTML=" :" + msec;
    if(msec>=100)
    {
        sec++
        secHead.innerHTML=" :" +sec;
        msec=0;
    }
    else if(sec>=60)
    {
        min++
        minHead.innerHTML=min;
        sec=0;
        secHead.innerHTML=" :" +sec;
    }
    else if(min==2)
        
    {    msec=0;
        msecHead.innerHTML=" :" + msec;
        sec=0;
        secHead.innerHTML=" :" +sec;
       

      clearInterval(interval);
      timeup();
        
    }
}

function timeup()
{
    main.innerHTML=`<h1>Your Score: ${score} </h1>`;
    alert("Time Up!");
}

window.onload=function()
{    
    showQuestion(0);
    interval= setInterval(timer,10);
   
}

var quiz=[
    {
        question:"_______ is a programming language.",
        answer:"Java",
        option: [
            "Java",
            "BootStrap",
            "MongoDB",
            "Flutter"
        ]
    },
    {
        question:"Which of the following is an IDE?",
        answer:"Dev C",
        option: [
            "Java",
            "BootStrap",
            "MongoDB",
            "Dev C"
        ]
    },
    {
        question:"Which of the following is a database?",
        answer:"MongoDB",
        option: [
            "Java",
            "BootStrap",
            "MongoDB",
            "VS Code"
        ]
    },
    {
        question:"Which of the following is a framework?",
        answer:"Flutter",
        option: [
            "Java",
            "Flutter",
            "MongoDB",
            "VS Code"
        ]
    },
    {
        question:"______ is a procedural language.",
        answer:"C",
        option: [
            "Java",
            "Flutter",
            "C",
            "Python"
        ]
    }

]

function showQuestion(e)
{
  
    var ques=document.getElementById("ques");
    ques.innerHTML=quiz[e].question;


var para=document.getElementsByTagName("p");
for(var i=0;i<para.length;i++)
{
     para[i].innerHTML=quiz[e].option[i];
}
}

var quesCount=0;
var score=0;

function nextQuestion()

{    validate(quesCount);
    removeActiveClass();
    quesCount++;
 if(quesCount<=4)
 {
    showQuestion(quesCount);
 }
 else if(quesCount===5)
 {   clearInterval(interval);
     alert("Quiz completed!")
     main.innerHTML=`<h1>Your Score: ${score} </h1>`
 }
}

function putActiveClass(e)
{
    removeActiveClass();
    e.classList.add("active")
}

function removeActiveClass()
{
    var active=document.getElementsByClassName("active")
    for(var i=0; i<active.length;i++)
    {
        active[i].classList.remove("active")
    }
}

var sc=document.getElementById("sc");
function validate(e)
{
    var active=document.getElementsByClassName("active")
   
    if(active[0].innerHTML===quiz[e].answer)
    {
        score+=10;
    }
    
    sc.innerHTML="Score: " + score + "/10";
}
