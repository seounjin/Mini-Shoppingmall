import { useState, useRef, useEffect } from 'react';

const useCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current.style.transition = 'transform 1s';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  // 왼쪽
  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  // 오른쪽
  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  return { prevSlide, nextSlide, slideRef, currentSlide };
};

export default useCarousel;