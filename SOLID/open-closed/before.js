// Main function should be closed for modifications 
function printQuiz(questions){
    questions.forEach(question => {
        console.log(question.description)
        switch(question.type){
            case 'boolean':
                console.log(`1. True`)
                console.log(`2. False`)
            break;
            case 'multiplechoice':
                question.options.forEach((option,index) => {
                    console.log(`${index +1 } ${option}`)
                })
            break;
            case 'text':
                console.log(`Answer: ____________________`)
            break;
            // case 'range':
            //     console.log(`Max: ____________________`)
            //     console.log(`Min: ____________________`)
            // break;
        }
        console.log('')
    })
}

const questions = [
    {
        type:'boolean',
        description: 'This video is useful'
    },
    {
        type:'multiplechoice',
        description: 'What is your favorite language?',
        options:['javascript','python']
    },
    {
        type:'text',
        description: 'Describe your favorite JS feature'
    },
    // {
    //     type:'range',
    //     description: 'What is the speed limit in your city?'
    // }
]

// what if we need another question type called range?
printQuiz(questions)