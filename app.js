$(document).ready(function () {
  //VARIABLES--------------------------------------------------

  let currentOperand = "";
  let previousOperand = "";
  let currentOperator = "";

  const display = $(".output");

  //CLICK EVENTS-----------------------------------------------

  $(".number").click(function () {
    appendNumber($(this).text());
    updateDisplay();
  });

  $(".operator").click(function () {
    chooseOperator($(this).text());
    updateDisplay();
  });

  $(".equal").click(function () {
    compute();
    updateDisplay();
  });

  $(".clear").click(function () {
    clear();
    updateDisplay();
  });

  $(".negative").click(function () {
    negative();
    updateDisplay();
  });

  $(".percentage").click(function () {
    percentage();
    updateDisplay();
  });

  //FUNCTIONS---------------------------------------------------

  function appendNumber(number) {
    currentOperand += number;
  }

  function chooseOperator(operator) {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      compute();
    }
    currentOperator = operator;
    previousOperand = currentOperand;
    currentOperand = "";
  }

  function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (currentOperator) {
      case "+":
        computation = prev + curr;
        break;
      case "-":
        computation = prev - curr;
        break;
      case "×":
        computation = prev * curr;
        break;
      case "÷":
        computation = prev / curr;
        break;
      default:
        return;
    }
    currentOperand = computation.toString();
    previousOperand = "";
    currentOperator = "";
  }

  function clear() {
    currentOperand = "";
    previousOperand = "";
    currentOperator = "";
  }

  function updateDisplay() {
    display.text(currentOperand);
  }

  function negative() {
    if (currentOperand.charAt(0) !== "-") {
      currentOperand = "-" + currentOperand;
    } else {
      currentOperand = currentOperand.slice(1);
    }
  }

  function percentage() {
    currentOperand = currentOperand / 100;
  }
});
