export const generateMockData = (count: number) => {
    const arr: string[] = [];
  
    for (let i = 0; i < count; i++) {
      arr.push(String(i + 1));
    }
  
    return arr;
  };