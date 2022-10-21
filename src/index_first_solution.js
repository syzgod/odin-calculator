const numInput = document.querySelector(".number-input");
const inputGrid = document.querySelector(".inputs");
const buttons = document.querySelectorAll("li");
const ops = document.querySelector(".operations");
const clearBtn = document.querySelector(".clear-btn");
const delBtn = document.querySelector(".del-btn");

let num1, num2, operation;

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
    if (e.target.dataset.type === "equal") {
      num2 = +numInput.value;
      numInput.value = doMath();
      ops.innerText += numInput.value;
    }
  })
);

clearBtn.addEventListener("click", () => {
  numInput.value = "";
  ops.innerText = "";
  num1 = "";
  num2 = "";
});

delBtn.addEventListener("click", () => {
  numInput.value = numInput.value.slice(0, -1);
  ops.innerText = numInput.value;
});

function doMath() {
  if (operation === "+") {
    return num1 + num2;
  }
  if (operation === "-") {
    return num1 - num2;
  }
  if (operation === "*") {
    return num1 * num2;
  }
  if (operation === "/") {
    return num1 / num2;
  }
}

// 1. don't overwrite the number/let add more numbers
// 2. when the equal pressed use the recognized operation on both of the numbers entered (num1, num2) and return to the input field so as the operation line after the equal sign
// 3. after the calculation has been made disable DEL and also if any new number or operator is entered act accordingly
// 4. make it work with multiple numbers
