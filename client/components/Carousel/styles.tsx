import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 400px;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const Li = styled.li<li>`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  opacity: ${(props) => props.opacity};
  transition: opacity 2s;
`;

interface li {
  opacity: number;
}
