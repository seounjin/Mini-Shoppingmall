import Dot from './Dot';
import Wrapper from './styles';
import { props } from '../types';

const Pagination = ({ imgData, currentSlide, setCurrentSlide }: props) => {
  return (
    <Wrapper>
      {imgData.map((data, index) => {
        return (
          <Dot
            key={'imgData' + index}
            currentSlide={currentSlide}
            index={index}
            setCurrentSlide={setCurrentSlide}
          ></Dot>
        );
      })}
    </Wrapper>
  );
};

export default Pagination;
