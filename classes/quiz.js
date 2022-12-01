import heroesData from "../data/data.js"
class Quiz{
    constructor(data){
        this.data = data;
    }

    getQuestions(numberOfQuestions){
        const heroArr = [];
        const numbersChosen = [];
        for(let index = 0; index < numberOfQuestions; index++){
            let randomHero;
            let heroID;
            do{
                randomHero = Math.floor(Math.random()*90);
            }while(numbersChosen.includes(randomHero))
            numbersChosen.push(randomHero);
            heroArr.push(this.data[randomHero]);

        }

        return heroArr;

    }

    createOptions(correctOption){
        const optionArr = [];
        for(let index = 0; index<3; index++){
            let randomHero;
            let heroName;
            do{
                randomHero = Math.floor(Math.random()*90);
                heroName = this.data[randomHero].Name;
            }while(optionArr.includes(heroName) || heroName == correctOption )
                
            optionArr.push(heroName);
            
        }
        optionArr.push(correctOption);
    
    return optionArr;

    }

    getImageURL(object){
        return object.ImageURL;

    }

    getCorrectOption(object){
        return object.Name;
    }

    checkCorrectness(option, currentQuestion, questionsToAnswer){
        if(option == questionsToAnswer[currentQuestion].Name && currentQuestion + 1 == questionsToAnswer.length ){
            return "win";
        } else if(option == questionsToAnswer[currentQuestion].Name){
            return "next";
        } else {
            return "fail";
        }
        
    }

    randomiseOptions = (options)=>{
    let currentIndex = options.length;
    let randomIndex;


    while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [options[currentIndex], options[randomIndex]] = [options[randomIndex], options[currentIndex]];
    }
  return options;
    
        
}


}

/*const testQuiz =new Quiz(heroesData);
console.log(testQuiz.getQuestions(5))
console.log(testQuiz.createOptions("Abathur"));
console.log(testQuiz.checkCorrectness("Abathur",1,[{Name:"Alextraza"},{Name:"Zul'Jin"},{Name:"Orphea"}]));
console.log(testQuiz.checkCorrectness("Abathur",1,[{Name:"Alextraza"},{Name:"Abathur"},{Name:"Orphea"}]));
console.log(testQuiz.checkCorrectness("Abathur",1,[{Name:"Alextraza"},{Name:"Abathur"}])); */

export default Quiz;


