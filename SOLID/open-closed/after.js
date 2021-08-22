class BooleanQuestion {
    constructor(description){
        this.description = description;
    }

    printChoices(){
        console.log(`1. True`)
        console.log(`2. False`)
    }
}

class MultipleChoiceQuestion {
    constructor(description,options){
        this.description = description;
        this.options = options;
    }

    printChoices(){
        this.options.forEach((option,index) => {
            console.log(`${index +1 } ${option}`)
        })
    }
}

class TextQuestion {
    constructor(description){
        this.description = description;
    }

    printChoices(){
        console.log(`Answer: ____________________`)
    }
}

class RangeQuestion {
    constructor(description){
        this.description = description;
    }

    printChoices(){
        console.log(`Max: ____________________`)
        console.log(`Min: ____________________`)
    }
}

// The logic here is closed for modification but open for extending 
function printQuiz(questions){
    questions.forEach(question => {
        console.log(question.description)
        question.printChoices()
        console.log('')
    })
}

const questions = [
    new BooleanQuestion('This video is useful'),
    new MultipleChoiceQuestion('What is your favorite language?',['javascript','python']),
    new TextQuestion('Describe your favorite JS feature'),
    new RangeQuestion('What is the speed limit in your city?')
]

printQuiz(questions)