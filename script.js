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

// console.log(add(2,3));
// console.log(subtract(2,3));
// console.log(multiply(2,3));
// console.log(divide(2,3));
let firstNum = "";
let secondNum = "";
let currentOp ="";
const currentDisplay = document.getElementById('initialDisplay')
const endDisplay = document.getElementById('finalDisplay')

const numButtons = document.querySelectorAll('#numButton');
 // we use the .forEach method to iterate through each button
 numButtons.forEach((button) => {
// and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        displayNum(button.textContent);
        });
    });
    function displayNum(number) {
        currentDisplay.textContent += number;
      }

const opButtons = document.querySelectorAll('#opButton');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayOp(button.textContent);
        });
    });
    function displayOp(operator) {
        calcNum();
        firstNum = currentDisplay.textContent;
        currentOp = operator;
        endDisplay.textContent = `${firstNum} ${currentOp}`

      }

      function calcNum() {
        secondNum = currentDisplay.textContent;
        currentDisplay.textContent =
        operate(firstNum, secondNum, currentOp);
        endDisplay.textContent = `${firstNum} ${currentOp}`
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
//console.log(operate(2.3, 3, subtract));

const clearButton = document.querySelectorAll('clearButton');
clearButton.addEventListener('click', clearScreen);
const clearScreen = () => {
    currentDisplay.textContent = ''
    finalDisplay.textContent = ''
}
















