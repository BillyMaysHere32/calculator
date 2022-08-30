let firstNum = "";
let secondNum = "";
let currentOp = null;
let shouldResetScreen = false

const currentDisplay = document.getElementById('initialDisplay')
const endDisplay = document.getElementById('finalDisplay')
const numButtons = document.querySelectorAll('#numButton');
const opButtons = document.querySelectorAll('#opButton');
const equalsButton = document.getElementById('equalsButton')
const clearButton = document.getElementById('clearButton')
const decButton = document.getElementById('decButton')

equalsButton.addEventListener('click', calcNum)
clearButton.addEventListener('click', clearScreen);
function clearScreen() {
    currentDisplay.textContent = "";
    finalDisplay.textContent = "";
    firstNum = "";
    secondNum = "";
    currentOp = null;
}

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayNum(button.textContent);
        });
    });
    function displayNum(number) {
        if (currentDisplay.textContent === '0' || shouldResetScreen)
    resetScreen()
    currentDisplay.textContent += number
      }


opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayOp(button.textContent);
        });
    });

function displayOp(operator) {
    if (currentOp !== null) 
    calcNum();
    firstNum = currentDisplay.textContent;
    currentOp = operator;
    endDisplay.textContent = `${firstNum} ${currentOp}`
    shouldResetScreen = true;

}

function calcNum() {
    if (currentOp === null || shouldResetScreen) return
    secondNum = currentDisplay.textContent;
    currentDisplay.textContent = roundResult(operate(firstNum, secondNum, currentOp));
    endDisplay.textContent = `${firstNum} ${currentOp} ${secondNum} =`
    currentOp = null;
    
}

function roundResult(number) {
    console.log(number);
    return Math.round(number * 100000) / 100000
  }


function operate(num1, num2, operator) {
console.log(operator);
console.log(num1);
console.log(num2);    
    num1 = Number(num1)
    num2 = Number(num2)
        switch (operator) {
          case '+':
            return add(num1, num2)
          case '-':
            return subtract(num1, num2)
          case '*':
            return multiply(num1, num2)
          case '/':
            if (num2 === 0) return null
            else return divide(num1, num2)
          default:
            return null
        }
      }
decButton.addEventListener('click', addDec);
function addDec() {
    if (shouldResetScreen) resetScreen()
    if (currentDisplay.textContent === '')
    currentDisplay.textContent = '0'
    if (currentDisplay.textContent.includes('.')) return
    currentDisplay.textContent += '.'
  }

function resetScreen() {
    currentDisplay.textContent = '';
    shouldResetScreen = false;
}

function add(num1, num2) {
    // console.log(num1);
    // console.log(num2);
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

















