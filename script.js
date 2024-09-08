function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    let display = document.getElementById('display').innerText;
    document.getElementById('display').innerText = display.slice(0, -1) || '0';
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    let expression = display.innerText;

    try {
        // Perform the calculation
        let result = eval(expression);

        // Update the display with the result
        display.innerText = result;

        // Save the calculation to history
        addToHistory(expression, result);
    } catch (error) {
        display.innerText = 'Error';
    }
}

function addToHistory(expression, result) {
    let historyList = document.getElementById('historyList');
    let historyItem = document.createElement('li');
    historyItem.innerText = `${expression} = ${result}`;
    historyList.appendChild(historyItem);
}

function clearHistory() {
    // Clear the calculation history
    let historyList = document.getElementById('historyList');
    historyList.innerHTML = '';  // Clear all history items
}
