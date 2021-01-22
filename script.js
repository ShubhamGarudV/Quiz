var currentQuestion=0;
var score=0;
var totalquestions=questions.length;


var container=document.getElementById('containerid');
var questionElement=document.getElementById('que');


var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');

var nextBtn=document.getElementById('nextbtn');
var playbtn=document.getElementById('playbtn');
var resultcont=document.getElementById('result'); 
var restextid=document.getElementById('restextid');
var linkcont1=document.getElementById('linkcont1');
var linkcont2=document.getElementById('linkcont2');
var checkansid=document.getElementById('checkansid');


function loadQuestion(questionindex)
{
    var q=questions[questionindex];
    questionElement.textContent=(questionindex+1)+'. '+q.question;
    opt1.textContent=q.option1;
    opt2.textContent=q.option2;
    opt3.textContent=q.option3;
    opt4.textContent=q.option4;

}
function loadNextQuestion()
{
    var selectedopt=document.querySelector('input[type=radio]:checked');
     
    if(!selectedopt)
    {
        alert("Please select an option");
        console.log("alert hai bhai");
        return;
    }
    var answer=selectedopt.value;
    if(questions[currentQuestion].answer==answer)
    {
        score=score+10;
    }
     selectedopt.checked=false; 
    currentQuestion++;
    if(currentQuestion==totalquestions-1)
    {
        nextBtn.textContent='Finish';
    }
    if(currentQuestion==totalquestions)
    {
        // container.style.display='none';
        resultcont.style.display='';
        checkansid.style.display='block';
        linkcont1.style.display='flex';
        linkcont2.style.display='flex';
        resultcont.textContent='Your score: '+score+'/100 ';
       
       resultcont.style.color="rgb(197, 167, 85)";
       resultcont.style.fontWeight = "bold";
       resultcont.style.textAlign = "center";
       resultcont.style.fontSize="25px";
       resultcont.style.paddingTop="125px";
        window.scrollBy(0, 700);
        if(score>=70)
        {
            
            resultcont.textContent+='  Great!';  
        }
       
        else if(score<=40 && score>=30)
        {
            
            resultcont.textContent+=' Not Bad!';  
        }
        else if(score<=30)
        {
            resultcont.textContent+=' Read More!';  
        }
        

        var x = document.createElement("BUTTON");
        var t = document.createTextNode("TRY AGAIN");
        x.appendChild(t);
        result.appendChild(x);
        
      
        x.style.backgroundColor="rgb(187, 116, 50)";
        x.style.fontSize="20px";
        x.style.marginTop="30px";
        x.style.border="none";
        x.style.outline="none";
        x.style.padding="10px";
        x.style.color="peachpuff";

        x.onclick = function() { 
            window.location.reload();
        };
       
    }
    loadQuestion(currentQuestion);
}
loadQuestion(0);
