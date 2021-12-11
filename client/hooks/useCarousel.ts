import { useState, useRef, useEffect } from 'react';

const useCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef(null);

  const temp = () => {
    setCurrentSlide((index) => index + 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = 'transform 1s';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  useEffect(() => {
    let interval = null;
    interval = setInterval(temp, 3000);
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

  return { prevSlide, nextSlide, slideRef, currentSlide };
};

export default useCarousel;
