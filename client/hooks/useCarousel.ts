import { useState, useEffect } from 'react';

const useCarousel = () => {
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

  return { prevSlide, nextSlide, currentSlide };
};

export default useCarousel;
