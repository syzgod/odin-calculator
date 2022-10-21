const numInput = document.querySelector(".number-input");
const inputGrid = document.querySelector(".inputs");
const buttons = document.querySelectorAll("li");
const ops = document.querySelector(".operations");
const equalBtn = document.querySelector('[data-type="equal"]');
const clearBtn = document.querySelector(".clear-btn");
const delBtn = document.querySelector(".del-btn");

let num1, num2, operator, result;

function addition() {
  return num1 + num2;
}

function subtraction() {
  return num1 - num2;
}

function multiplication() {
  return num1 * num2;
}

function division() {
  return num1 / num2;
}

function operate() {
  switch (operator) {
    case "+":
      return addition(num1, num2);
    case "-":
      return subtraction(num1, num2);
    case "*":
      return multiplication(num1, num2);
    case "/":
      if (num2 === 0) return null;
      else return division(num1, num2);
    default:
      return null;
  }
}

buttons.forEach((el) =>
  el.addEventListener("click", function (e) {
    if (e.target.dataset.type === "num" || e.target.innerText === ".") {
      numInput.value += e.target.innerText;
    }
    ops.innerText += e.target.innerText;
    if (e.target.dataset.type === "ops") {
      operator = e.target.innerText;
      console.log(operator);
      num1 = +numInput.value;
      numInput.value = "";
      console.log(num1);
    }
  })
);

equalBtn.addEventListener("click", () => {
  num2 = +numInput.value;
  console.log(num2);
  console.log(operator);
  numInput.value = operate();
  ops.innerText += numInput.value;
});

clearBtn.addEventListener("click", () => {
  numInput.value = ops.innerText = num1 = num2 = operator = "";
});

delBtn.addEventListener("click", () => {
  numInput.value = numInput.value.slice(0, -1);
  ops.innerText = numInput.value;
});
