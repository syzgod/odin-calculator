const numInput = document.querySelector(".number-input");
const inputGrid = document.querySelector(".inputs");
const buttons = document.querySelectorAll("li");
const ops = document.querySelector(".operations");
const equalBtn = document.querySelector('[data-type="equal"]');
const clearBtn = document.querySelector(".clear-btn");
const delBtn = document.querySelector(".del-btn");

let num1, num2, operation;

function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function operate(operation, num1, num2) {
  switch (operation) {
    case "+":
      addition(num1, num2);
      break;
    case "-":
      subtraction(num1, num2);
      break;
    case "/":
      division(num1, num2);
      break;
    case "*":
      multiplication(num1, num2);
      break;
    default:
      console.log("default");
  }
}

buttons.forEach((el) =>
  el.addEventListener("click", function (e) {
    if (e.target.dataset.type === "num" || e.target.innerText === ".") {
      numInput.value += e.target.innerText;
    }
    ops.innerText += e.target.innerText;
    if (e.target.dataset.type === "ops") {
      operation = e.target.innerText;
      console.log(operation);
      num1 = +numInput.value;
      numInput.value = "";
      console.log(num1);
    }
  })
);

equalBtn.addEventListener("click", (operation, num1) => {
  num2 = +numInput.value;
  console.log(num2);
  numInput.value = operate(operation, num1, num2);
  ops.innerText += numInput.value;
});

clearBtn.addEventListener("click", () => {
  numInput.value = "";
  ops.innerText = "";
  num1 = "";
  num2 = "";
  operation = "";
});

delBtn.addEventListener("click", () => {
  numInput.value = numInput.value.slice(0, -1);
  ops.innerText = numInput.value;
});
