function convertToBinary() {
  const r = [];

  let inputValue = document.getElementById("decimalInput").value;
  let inputValueCopy = inputValue;

  while (inputValueCopy > 0) {
    inputValueCopy = inputValueCopy / 2;
    if (Number.isInteger(inputValueCopy)) {
      r.push(0);
    } else {
      inputValueCopy = Math.ceil(inputValueCopy);
      inputValueCopy = inputValueCopy - 1;
      r.push(1);
    }
  }
  r.reverse();

  document.getElementById("binaryResult").textContent = r.join("");
}
