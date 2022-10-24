export const generateMockData = (startNumber: number, size: number) => {
  const arr: { title: string; id: number; subtitle: string; description: string }[] = [];

  if (startNumber >= 60) return arr

  for (let i = startNumber; i < startNumber + size; i++) {
    arr.push({
      title: 'Гарри Поттер',
      id: i+1,
      subtitle: 'И Философский Камень',
      description: 'Начало истории, на которой выросло не одно поколение. Гарри Поттер делает первые шаги в мире волшебства.'
    });
  }
  return arr;
};

export const scrollOnOffset = (el: Element, offset: number) => {
  el.scrollTo({
    left: offset,
    behavior: 'smooth',
  });
}

export const showFlagFromChild = (flag: boolean) => {
  console.log('Flag is: ', flag)
}

export const clickFn = () => {
  return console.log('clicked')
}