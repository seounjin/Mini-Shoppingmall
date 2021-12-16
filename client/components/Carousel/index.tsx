import { Wrapper, Li } from './styles';
import Slide from './Slide';
import Pagination from './Pagination';
import useCarousel from '../../hooks/useCarousel';
import { imgUrl } from './types';

const Carousel = () => {
  const { currentSlide, setCurrentSlide } = useCarousel();
  return (
    <Wrapper>
      <ul>
        {MAIN_IMAGE.map((data, index) => {
          const opacity = currentSlide === index ? 1 : 0;
          return (
            <Li opacity={opacity} key={index}>
              <Slide imgUrl={data.imgUrl}></Slide>
            </Li>
          );
        })}
      </ul>
      <Pagination
        imgData={MAIN_IMAGE}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      ></Pagination>
    </Wrapper>
  );
};

const MAIN_IMAGE: imgUrl[] = [
  { imgUrl: '/img1.jpg' },
  { imgUrl: '/img2.jpg' },
  { imgUrl: '/img3.jpg' },
];
export default Carousel;
