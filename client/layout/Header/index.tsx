import { FC } from 'react';
import Wrapper from './styles';
import NavBar from '../../components/NavBar';

const Header: FC = () => (
  <Wrapper>
    <div className="logo">
      <h1>TROUBLESHOOTER</h1>
      <span>luxury shopping online</span>
    </div>
    <NavBar />
  </Wrapper>
);

export default Header;
