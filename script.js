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
    if (currentOp === null || shouldResetScreen) return;
    secondNum = currentDisplay.textContent;
    currentDisplay.textContent =
    operate(firstNum, secondNum, currentOp);
    endDisplay.textContent = `${firstNum} ${currentOp}`;
    currentOperation = null;
}



function operate(firstNum, secondNum, operator) {
    if (operator = "+") {
        return add(firstNum, secondNum);
    } else if (operator = "-") {
        return subtract(firstNum, secondNum);
    } else if (operator = "*") {
        return multiply(firstNum, secondNum);
    } else if (operator = "/") {
        return divide(firstNum, secondNum);
    }
}
// //console.log(operate(2.3, 3, subtract));

function resetScreen() {
    currentDisplay.textContent = ''
    shouldResetScreen = false
}

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

















