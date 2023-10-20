let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '+' && value !== '-' && value !== '*' && value !== '/') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = displayValue + ' = ' + result;
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

updateDisplay();
