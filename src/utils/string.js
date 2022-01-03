export const concatString = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') return undefined;
  return str1 + str2;
}