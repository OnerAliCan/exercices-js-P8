// Créez votre fonction ici

function calculateAverage(x) {
  let add = 0;

  if (x !== undefined) {
    for (let i = 0; i < x.length; i++) {
      const element = x[i];
      const result = (add += element);

      const finalResult = result / x.length;
      if (i === x.length - 1) {
        return finalResult;
      }
    }
  } else {
    return "No numbers to calculate average";
  }
}

calculateAverage([10, 20, 30, 20]);

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;
