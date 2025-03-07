//votre code ici
function pairNumbers(x, y) {
  let r = [];

  if (x <= y) {
    for (let i = 1; i <= y; i++) {
      if (Number.isInteger(i / 2)) {
        r.push(i);
      }
    }
    r = r.toString();
    console.log(r);
    return r;
  } else {
    return "";
  }
}
export default pairNumbers;
