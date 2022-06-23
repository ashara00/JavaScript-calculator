alert(
  "This calculator can only perform operations between 2 numbers please. Please enter the appropriate parameters."
);

function add(a, b) {
  alert("a + b is " + (a + b));
}

function subtract(a, b) {
  alert("a - b is " + (a - b));
}

function divide(a, b) {
  alert("a / b is " + a / b);
}

function multiply(a, b) {
  alert("a * b is " + a * b);
}

function calculate(a, b, operation) {
  if (operation == "+") {
    add(a, b);
  } else if (operation == "-") {
    subtract(a, b);
  } else if (operation == "/") {
    divide(a, b);
  } else if (operation == "*") {
    multiply(a, b);
  } else if (operation == "%") {
    remainder(a, b);
  } else {
    alert("Please enter a valid operation.");
  }
}

let a = parseFloat(prompt("Please enter the first number: "));
let b = parseFloat(prompt("Please enter the second number: "));
let operation = prompt("Enter operator ( either +, -, * or / ): ");

calculate(a, b, operation);
