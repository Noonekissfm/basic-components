export const generateMockData = (startNumber: number, size: number) => {
  const arr: number[] = [];

  if (startNumber >= 60) return arr

  for (let i = startNumber; i < startNumber + size; i++) {
    arr.push(i + 1);
  }

  return arr;
};