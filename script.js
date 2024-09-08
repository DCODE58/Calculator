function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    let display = document.getElementById('display').innerText;
    document.getElementById('display').innerText = display.slice(0, -1) || '0';
}