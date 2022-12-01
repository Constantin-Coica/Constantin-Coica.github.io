import heroesData from "./data/data.js";
import Quiz from "./classes/quiz.js";


const heroIMG = document.querySelector(".heroIMG");
const buttons = document.querySelectorAll(".button");
const startNext = document.querySelector(".functional_button");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
console.log(startNext)
let quizActive = false;
let currentQuestion;
let correctOption;
const quiz = new Quiz(heroesData);
let heroQuestions;
let alreadyAnswered = false;
let audioToPlay;


const handleStartQuiz = ()=>{
    h1.innerHTML = "The Raven Lord's Quiz";
    heroQuestions = quiz.getQuestions(10);
    console.log(heroQuestions);
    currentQuestion = 0;
        console.log(currentQuestion);
        heroIMG.src = quiz.getImageURL(heroQuestions[currentQuestion]);
        correctOption = quiz.getCorrectOption(heroQuestions[currentQuestion]);
        const optionsToDisplay = quiz.randomiseOptions(quiz.createOptions(correctOption));
        
        for(let i = 0; i<buttons.length;i++){
            buttons[i].innerHTML=optionsToDisplay[i];
            buttons[i].classList.remove("noDisplay");
        }
        h2.classList.add("noDisplay");
        h3.classList.remove("noDisplay");

        quizActive = true;
        startNext.innerHTML = "Restart";
        alreadyAnswered = false; 
}

const handleNextQuestion = ()=>{
    
    heroIMG.src = quiz.getImageURL(heroQuestions[currentQuestion]);
    correctOption = quiz.getCorrectOption(heroQuestions[currentQuestion]);
    const optionsToDisplay = quiz.randomiseOptions(quiz.createOptions(correctOption));
        
    for(let i = 0; i<buttons.length;i++){
        buttons[i].innerHTML=optionsToDisplay[i];
    }
    startNext.innerHTML = "Restart";   
}

const handleOptionsChosen = (outcome)=>{
    if(outcome == "fail"){
        let name = heroQuestions[currentQuestion].Name;
        audioToPlay = new Audio(`./sounds/${name}_negative.ogg`);
        audioToPlay.volume = 0.3;
        audioToPlay.play();
        event.target.classList.add("wrong");
        alreadyAnswered = true;
        h1.innerHTML = "You failed!";
          
    } else if(outcome == "next"){
        let name = heroQuestions[currentQuestion].Name;
        audioToPlay = new Audio(`./sounds/${name}_positive.ogg`);
        audioToPlay.volume = 0.3;
        audioToPlay.play();
        event.target.classList.add("correct");
        currentQuestion ++;
        startNext.innerHTML = "Next";
        alreadyAnswered = true;   
    } else if(outcome == "win"){
        let name = heroQuestions[currentQuestion].Name;
        audioToPlay = new Audio(`./sounds/${name}_positive.ogg`);
        audioToPlay.volume = 0.3;
        event.target.classList.add("correct");
        audioToPlay.play();
        startNext.innerHTML = "Finish";
        


    }
}

const removeClasses = ()=>{
    buttons.forEach(button=>{
        button.classList.remove("correct","wrong");
    });
}


startNext.addEventListener("click",()=>{
    if(startNext.innerHTML == "Start" || startNext.innerHTML == "Restart"){
        if(startNext.innerHTML == "Restart"){
            const restart = new Audio("./sounds/Restart.oga");
            restart.volume =  0.30;
            restart.play();
        }

        if(startNext.innerHTML == "Start"){
            const intro = new Audio("./sounds/Intro.oga");
            intro.volume =  0.30;
            intro.play();
            
        }
        handleStartQuiz();
        removeClasses();
        
    } else if(startNext.innerHTML == "Next"){
        handleNextQuestion();
        alreadyAnswered = false;
        removeClasses();
    } else if(startNext.innerHTML == "Finish"){
        for(let i = 0; i<buttons.length;i++){
            buttons[i].classList.add("noDisplay");
        }
        removeClasses();
        const outro = new Audio("./sounds/Victory.oga");
        outro.volume = 0.3;
        outro.play();
        h1.innerHTML = "Congratiulations, hero!";
        heroIMG.src = "./imgs/Raven_Lord_Happy.png";
        h3.classList.add("noDisplay");
        startNext.innerHTML = "Restart";
    }
});

buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        if(!alreadyAnswered){
        const outcome = quiz.checkCorrectness(event.target.innerHTML,currentQuestion,heroQuestions);
        handleOptionsChosen(outcome);
        }
        

    })
    

})


