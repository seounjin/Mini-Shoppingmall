import { Wrapper, Li } from './styles';
import Slide from './Slide';
import useCarousel from '../../hooks/useCarousel';

const Carousel = () => {
  const { currentSlide } = useCarousel();
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
    </Wrapper>
  );
};

const MAIN_IMAGE = [
  { imgUrl: '/img1.jpg' },
  { imgUrl: '/img2.jpg' },
  { imgUrl: '/img3.jpg' },
];
export default Carousel;
