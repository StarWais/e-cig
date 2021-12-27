export const isDevelopment = () => {
  const env = process.env.NODE_ENV;
  if (env === 'development') {
    return true;
  }
  if (env === 'production') {
    return false;
  }
  return false;
};

export const sortBools = (a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
};

export const sortDates = (a, b) => {
  const aDate = new Date(a || 0).getTime();
  const bDate = new Date(b || 0).getTime();
  if (aDate > bDate) return 1;
  if (aDate < bDate) return -1;
  return 0;
};

export const getErrorText = (error) =>
  error?.response?.data?.message ||
  error?.message ||
  'Произошла ошибка';

export const sortStrings = (a, b) => {
  const aName = a || 'zzzzzzz';
  const bName = b || 'zzzzzzz';
  return aName.localeCompare(bName);
};

export const sortNumbers = (a, b) => {
  if (a > b) return 1;
  if (b < a) return -1;
  return 0;
};

export function flatArray(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flatArray(toFlatten) : toFlatten
    );
  }, []);
}

export const getUniqueFromRange = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};
