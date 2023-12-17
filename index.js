const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const result = new Function('return ' + display.value)();
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

document.getElementById("keys").addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const buttonText = event.target.textContent;
        if (buttonText === "=") {
            calculate();
        } else if (buttonText === "C") {
            clearDisplay();
        } else {
            appendToDisplay(buttonText);
        }
    }
});
