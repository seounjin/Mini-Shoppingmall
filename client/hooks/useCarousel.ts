import { Dispatch, SetStateAction, useState, useEffect } from 'react';

type ReturnTypes = {
  currentSlide: number;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
};

const useCarousel = (): ReturnTypes => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const play = () => {
    setCurrentSlide((index) => (index + 1) % 3);
  };

  useEffect(() => {
    let interval = null;
    interval = setInterval(play, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  // 왼쪽
  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  // 오른쪽
  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  return { currentSlide, setCurrentSlide };
};

export default useCarousel;
