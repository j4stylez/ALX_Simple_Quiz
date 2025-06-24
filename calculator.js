// Arithmetic functions
function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
}

// Utility to get numbers from input
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

// Display result
function displayResult(value) {
    document.getElementById('calculation-result').textContent = value;
}

// Event listeners
document.getElementById('add').addEventListener('click', function () {
    const [n1, n2] = getInputValues();
    displayResult(add(n1, n2));
});

document.getElementById('subtract').addEventListener('click', function () {
    const [n1, n2] = getInputValues();
    displayResult(subtract(n1, n2));
});

document.getElementById('multiply').addEventListener('click', function () {
    const [n1, n2] = getInputValues();
    displayResult(multiply(n1, n2));
});

document.getElementById('divide').addEventListener('click', function () {
    const [n1, n2] = getInputValues();
    displayResult(divide(n1, n2));
});
