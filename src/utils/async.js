
const delay= ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchCake = async (shouldFailed=false) => {
  await delay(1000);
  if (shouldFailed) throw Error('fetch failed');
  return 'pancake';
}