const result = document.getElementById("calculator-screen");

let operatorKlik = false;

function getResult(value) {
  if (value === "+" || value === "-" || value === "*" || value === "/") {
    if (operatorKlik) {
      return;
    }
    operatorKlik = true;
  } else {
    operatorKlik = false;
  }
  if (value === "%") {
    result.value = eval(result.value) / 100;
  } else {
    result.value += value;
  }
}

function resetOperator() {
  operatorKlik = false;
}

function clearResult() {
  result.value = "";
  resetOperator();
}

function calculateResult() {
  result.value = eval(result.value);
}
