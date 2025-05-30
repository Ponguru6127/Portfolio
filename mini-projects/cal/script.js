
let display = document.getElementById("display");
let currentInput = "0";
let previousInput = null;
let operator = null;

function updateDisplay() {
  display.innerText = currentInput;
}

function appendNumber(num) {
  if (currentInput === "0" && num !== ".") {
    currentInput = num;
  } else if (num === "." && currentInput.includes(".")) {
    return;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = "0";
  previousInput = null;
  operator = null;
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}

function percent() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}

function setOperator(op) {
  if (operator && previousInput !== null) {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "0";
}

function calculate() {
  if (operator === null || previousInput === null) return;
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = current !== 0 ? prev / current : "Error";
      break;
    default:
      return;
  }
  currentInput = result.toString();
  operator = null;
  previousInput = null;
  updateDisplay();
}
