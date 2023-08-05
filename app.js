const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
let minusOrplus = "+";

plusBtn.onclick = function () {
  minusOrplus = "+";
};
minusBtn.onclick = function () {
  minusOrplus = "-";
};
function resultColor(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}
function calculateplusOrminus(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  //   тернарный оператор, ? - вместо иф, что перед то и является условием, : - else
  return actionSymbol == "+" ? num1 + num2 : num1 - num2;

  //   обычное решение через ифы
  //   if (actionSymbol == "+") {
  //     return num1 + num2;
  //   } else {
  //     return num1 - num2;
  //   }
}
submitBtn.onclick = function () {
  const result = calculateplusOrminus(input1, input2, minusOrplus);
  resultColor(result);
};
