let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2)
}
const generateTarget = () => {
  return Math.floor(Math.random() * 9)
};

const compareGuesses = (human, computer, secret) => {
  if (getAbsoluteDistance(human, secret) > getAbsoluteDistance(computer, secret)) {
    return false
  } else if (getAbsoluteDistance(human, secret) < getAbsoluteDistance(computer, secret)) {
    return true
  } else {
    return true
  }
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1
  } else {
    computerScore += 1
  }
}

const advanceRound = () => {
  currentRoundNumber += 1
}