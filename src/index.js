const numInput = document.querySelector(".number-input");
const inputGrid = document.querySelector(".inputs");
const buttons = document.querySelectorAll("li");
const ops = document.querySelector(".operations");

buttons.forEach((el) =>
  el.addEventListener("click", function (e) {
    numInput.value = e.target.innerText;
    ops.innerText = e.target.innerText;
  })
);

// 1. if input is not a number then display 'Error not a number'
// 2. if numbers are pressed add them to the input field so as the calculation line
// 3. when an operator is pressed only add them to the calculation line
// 4. when the equal pressed use the operation on both of the numbers entered (num1, num2)
// 5. when Clear is pressed clear the display, the calculation line and the 2 numbers variables
// 6. when the Del pressed clear the last digit entered
