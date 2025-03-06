function appendToDisplay(x) {
  document.getElementById("display").value += x;
}

function calculateResult() {
  return (document.getElementById("display").value = eval(
    document.getElementById("display").value
  ));
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
