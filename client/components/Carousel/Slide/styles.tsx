import styled from 'styled-components';

const Wrapper = styled.div<wrapper>`
  width: 100vw;
  height: 400px;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center 34%;
  background-repeat: no-repeat;
`;

export default Wrapper;

interface wrapper {
  imgUrl: string;
}
