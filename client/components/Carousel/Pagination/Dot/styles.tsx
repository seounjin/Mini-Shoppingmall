import styled from 'styled-components';

const Wrapper = styled.span<wrapper>`
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${(props) =>
    props.index === props.currentSlide ? 'white' : 'black'};
`;

export default Wrapper;

interface wrapper {
  index: number;
  currentSlide: number;
}
