// @ts-nocheck
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'

import video1 from '../assets/videos/video1.mp4'
import video2 from '../assets/videos/video2.mp4'
import video3 from '../assets/videos/video3.mp4'


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

export const handleClick = () => {
  return console.log('clicked')
}

export const cardData = [
  {src: image1, video: video1, name: 'Beautiful Snow with Fireplace Crackling', link: 'https://www.youtube.com/watch?v=CTBWcXkNoMM'},
  {src: image2, video: video2, name: 'NYC Apartment In A Snow Storm', link: 'https://www.youtube.com/watch?v=9xe7brRV24w'},
  {src: image3, video: video3, name: 'Drift Away 24/7 In Your Own Private Waterfall & Spa', link: 'https://www.youtube.com/watch?v=E4j7ifztNVY'},
  {src: image1, video: video1, name: 'Beautiful Snow with Fireplace Crackling', link: 'https://www.youtube.com/watch?v=CTBWcXkNoMM'},
  {src: image2, video: video2, name: 'NYC Apartment In A Snow Storm', link: 'https://www.youtube.com/watch?v=9xe7brRV24w'},
  {src: image3, video: video3, name: 'Drift Away 24/7 In Your Own Private Waterfall & Spa', link: 'https://www.youtube.com/watch?v=E4j7ifztNVY'},
  {src: image1, video: video1, name: 'Beautiful Snow with Fireplace Crackling', link: 'https://www.youtube.com/watch?v=CTBWcXkNoMM'},
  {src: image2, video: video2, name: 'NYC Apartment In A Snow Storm', link: 'https://www.youtube.com/watch?v=9xe7brRV24w'},
  {src: image3, video: video3, name: 'Drift Away 24/7 In Your Own Private Waterfall & Spa', link: 'https://www.youtube.com/watch?v=E4j7ifztNVY'},
]