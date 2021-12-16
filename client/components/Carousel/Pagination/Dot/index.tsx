import Wrapper from './styles';
import { props } from '../../types';

const Dot = ({ currentSlide, index, setCurrentSlide }: props) => (
  <Wrapper
    currentSlide={currentSlide}
    index={index}
    onClick={() => setCurrentSlide(index)}
  ></Wrapper>
);

export default Dot;
