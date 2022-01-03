export const add = (a, b) => {
  if (Number.isNaN(a) || Number.isNaN(b)) return NaN;
  return a + b;
}

export const divide = (a, b) => {
  if (Number.isNaN(a) || Number.isNaN(b)) return NaN;
  if (b === 0) throw Error('Divide by zero');
  return a / b;
}
