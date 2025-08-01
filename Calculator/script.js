let display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === "" || /[+\-*/%]$/.test(currentInput)) return;
  currentInput += operator;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay("0");
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput || "0");
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    updateDisplay(result);
    currentInput = result.toString();
  } catch {
    updateDisplay("Error");
    currentInput = "";
  }
}

function updateDisplay(value = currentInput) {
  display.textContent = value;
}
