
let nextBtn=document.getElementById("next");
let Question=document.getElementById("question");
let append=document.getElementById("append");
let score=document.getElementById("score");
let modal=document.getElementById("modal");
let result=document.getElementById("result");
let option1=document.createElement('li');
let option2=document.createElement('li');
let option3=document.createElement('li');
let option4=document.createElement('li');


let questions = [
    {
        question: "What is the National Bird of India?",
        options: {
            Option1: "Lion",
            Option2: "Tiger",
            Option3: "Peacock",
            Option4: "Crow"
        },
        correct_answer: "Peacock"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: {
            Option1: "Earth",
            Option2: "Mars",
            Option3: "Jupiter",
            Option4: "Saturn"
        },
        correct_answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: {
            Option1: "Elephant",
            Option2: "Blue Whale",
            Option3: "Giraffe",
            Option4: "Hippopotamus"
        },
        correct_answer: "Blue Whale"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: {
            Option1: "Gold",
            Option2: "Oxygen",
            Option3: "Silver",
            Option4: "Iron"
        },
        correct_answer: "Oxygen"
    }
];




let count=0;
let Score=0;
let click=false;

function loadQuestion(){
    [option1, option2, option3, option4].forEach(opt => opt.style.backgroundColor = '');
    Question.textContent=questions[count].question;
    score.textContent=Score;
    let answers=questions[count].options;
    option1.textContent=answers.Option1;
    option2.textContent=answers.Option2;
    option3.textContent=answers.Option3;
    option4.textContent=answers.Option4;
    option1.classList.add('options');
    option2.classList.add('options');
    option3.classList.add('options');
    option4.classList.add('options');
    
    append.appendChild(option1);
    append.appendChild(option2);
    append.appendChild(option3);
    append.appendChild(option4);
    [option1, option2, option3, option4].forEach(option => {
        option.onclick = function () {
            [option1, option2, option3, option4].forEach(opt => opt.style.backgroundColor = '');

            if (option.textContent === questions[count].correct_answer) {
                option.style.backgroundColor = 'green';
                Score+=5;
                score.textContent=Score;
            } else {
                option.style.backgroundColor = 'red';
                Score-=5;
                score.textContent=Score;
            }
        };
    });

}


function updateQuestion(count){
    [option1, option2, option3, option4].forEach(opt => opt.style.backgroundColor = '');
    Question.textContent=questions[count].question;
    score.textContent=Score;
    let answers=questions[count].options;
    option1.textContent=answers.Option1;
    option2.textContent=answers.Option2;
    option3.textContent=answers.Option3;
    option4.textContent=answers.Option4;
    [option1, option2, option3, option4].forEach(option => {
        option.onclick = function () {
            
            [option1, option2, option3, option4].forEach(opt => opt.style.backgroundColor = '');

            if (option.textContent === questions[count].correct_answer) {
                Score+=5;
                score.textContent=Score;
                option.style.backgroundColor = 'green';
            } else {
                Score-=5;
                score.textContent=Score;
                option.style.backgroundColor = 'red';
            }
        };
    });


}





nextBtn.addEventListener("click",function(){
    count++;
    if (count<questions.length){
        if(count===3){
            nextBtn.textContent='Submit';
        }
        updateQuestion(count);
    }
    else{

        
        modal.style.display='block';
        result.textContent=`Your Score is : ${Score}`;
        if(Score<10){
            document.getElementById("head").textContent="Better Luck Next Time!"
        }
        
        count=0;
        Score=0;
        setTimeout(function(){
            modal.style.display='none';
            
        },4000);
        nextBtn.textContent='Next';

        loadQuestion();
    }



})


loadQuestion();
