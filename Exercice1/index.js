//votre code ici
function pairNumbers(x, y) {
  const biggest = Math.max(x, y);
  let r = [];

  for (let i = 1; i < biggest; i++) {
    if (Number.isInteger(i / 2)) {
      r.push(i);
    }
  }
  r = r.toString();
  console.log(r);
  return r;
}
export default pairNumbers;
