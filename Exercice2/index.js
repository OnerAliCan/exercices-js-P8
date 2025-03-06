function calculate(x, y, z) {
  let result;
  if (z === "+" || z === "-" || z === "*" || z === "/") {
    if (z === "+") {
      result = x + y;
    } else if (z === "-") {
      result = x - y;
    } else if (z === "*") {
      result = x * y;
    } else if (z === "/") {
      if (y === 0) {
        return "Division by zero is not allowed";
      } else {
        result = x / y;
      }
    }
    return result;
  } else {
    return "Invalid operator";
  }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, "+")); // Affiche 8
console.log(calculate(10, 4, "-")); // Affiche 6
console.log(calculate(7, 2, "*")); // Affiche 14
console.log(calculate(12, 3, "/")); // Affiche 4
console.log(calculate(8, 0, "/")); // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, "%")); // Affiche "Invalid operator"

// export default calculate;
