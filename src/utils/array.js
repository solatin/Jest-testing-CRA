export const concatArray = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return undefined;
  return [...arr1, ...arr2];
}