import styled from 'styled-components';

const Wrapper = styled.header`
  position: relative;
  display: flex;
  height: 100px;
  align-items: center;
  border: 0.5px solid gray;
  h1 {
    margin: 0;
  }

  .logo {
    margin: 0 20px 0 20px;
    text-align: center;
  }

  @media ${({ theme }) => theme.device.laptop} {
    display: block;
  }
`;

export default Wrapper;
