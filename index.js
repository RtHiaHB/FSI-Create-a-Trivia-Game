// Your Code Here
let userName = window.prompt('Please enter your name:')
let userScore = 0
let playAgain = true
function playGame() {
    for (let i = 0; i < questions.length; i++) {
        let question = questions[i]
        let userAnswer = window.prompt(question.text)
        if (userAnswer === question.correctAnswer) {
            userScore += 10
        }

    }
    window.alert(`${userName}'s score was ` + userScore)
}

//loop through after each game if the player wants to continue playing
while (playAgain === true) {
    playGame()
    let userChoice = window.prompt('Would you like to play the game again?  Answer yes or no.')
    //I think this could be simplified: I don't think testing for the 'Yes' choice is necessary. It could be something like this:
    //if (userChoice === 'no') {
    //      playAgain = false
    //      window.alert('Thanks for playing the game!')
    // }
    if (userChoice === 'yes') {
        playAgain = true
    } else {
        playAgain = false
        window.alert('Thanks for playing the game!')
        // if you don't reset the user score to 0, the score will go higher and higher, eventually reaching infinity.
        userScore = 0
    }
}