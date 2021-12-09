import { Menu } from '../types';
import UL from './styles';

const RightMenu = () => (
  <UL>
    {LEFT_MENU.map((data, index) => {
      return (
        <li className="temp" key={index}>
          {data.title}
        </li>
      );
    })}
  </UL>
);

const LEFT_MENU: Menu[] = [
  { title: 'LOGIN', url: '/login' },
  { title: 'MYPAGE', url: '/mypage' },
  { title: 'CART', url: '/cart' },
];
export default RightMenu;
