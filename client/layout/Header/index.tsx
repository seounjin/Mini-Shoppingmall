import { FC } from 'react';
import Wrapper from './styles';
import NavBar from '../../components/NavBar';

const Header: FC = () => (
  <Wrapper>
    <h1>로고</h1>
    <NavBar />
  </Wrapper>
);

export default Header;
