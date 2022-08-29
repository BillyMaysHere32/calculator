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

function operate(firstNum, secondNum, operator) {
    return operator(firstNum, secondNum)
}
//console.log(operate(2.3, 3, subtract));


const numButtons = document.querySelectorAll('#numButton');
 // we use the .forEach method to iterate through each button
 numButtons.forEach((button) => {
// and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        displayNum(button.textContent);
        });
    });
    function displayNum(number) {
        currentDisplay.textContent += number
      }
const currentDisplay = document.getElementById('display')






// let addButton = add;
// let subtractButton = subtract;
// let multiplyButton = multiply;
// let divideButton = divide;

















