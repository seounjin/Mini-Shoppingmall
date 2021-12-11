import Wrapper from './styles';
import Slide from './Slide';
import useCarousel from '../../hooks/useCarousel';

const Carousel = () => {
  const { slideRef } = useCarousel();
  return (
    <Wrapper>
      <ul ref={slideRef}>
        {MAIN_IMAGE.map((data, index) => {
          return (
            <li key={index}>
              <Slide imgUrl={data.imgUrl}></Slide>
            </li>
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
