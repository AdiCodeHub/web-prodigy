const resultElement = document.getElementById('result');
const clearBtn = document.getElementById('clear-button');
const deleteBtn = document.getElementById('delete-button');
const divideBtn = document.getElementById('divide-button');
const multiplyBtn = document.getElementById('multiply-button');
const subtractBtn = document.getElementById('subtract-button');
const addBtn = document.getElementById('addition-button');
const decimalBtn = document.getElementById('decimal-button');
const equalBtn = document.getElementById('equal-button');
const numberBtns = document.querySelectorAll('.number')

// initialise
let result = '';
let operation = '';
let previousOperand = 0;



// function
const appendNumber = (number) => {
    if(number === '.' && result.includes('.')) return;
    result += number;
    updateDisplay();

}

const updateDisplay = () => {
    if (operation) {resultElement.innerText = $(previousOperand) ;$(operation) ;$(result);}
    
    else resultElement.innerText = result;
    
}

const selectOperator = (operatorValue) => {
    if(result === '') return;

    if(operation !== '' && previousOperand !== '')
    {
        calulateResult();
    }
    operation = operatorValue;
    previousOperand = result;
    result = '';
    updateDisplay();
}

const calulateResult = () => {
    let evalutedResult;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(result);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            evalutedResult = prev + current;
            break;
            case '-':
                evalutedResult = prev - current;
                break;
                case '*':
                    evalutedResult = prev * current;
                    break;
                    case '/':
                        evalutedResult = prev / current;
                        break;
    
        default:
            return;
    } 
    result = evalutedResult.toString();
    operation ='';
    previousOperand = '';
}

numberBtns.forEach(button => {
button.addEventListener('click', () => {
    // console.log(button.innerText);
    appendNumber(button.innerText);
})
});

// clear display
const clearDisplay =() => {
    result = '';
    previousOperand = '';
    operation = '';
    updateDisplay();
}

const deleteLastDigit = () => {
    if (result === '') return; 
    result = result.slice(0, -1);
    updateDisplay();    
    
}

decimalBtn.addEventListener('click', () => appendNumber('.'));
addBtn.addEventListener('click', () => selectOperator('+'));
subtractBtn.addEventListener('click', () => selectOperator('-'));
multiplyBtn.addEventListener('click', () => selectOperator('*'));
divideBtn.addEventListener('click', () => selectOperator('/'));
equalBtn.addEventListener('click', () => {
    if (result=== '') return;
    calulateResult();
    updateDisplay();
});
clearBtn.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteLastDigit);