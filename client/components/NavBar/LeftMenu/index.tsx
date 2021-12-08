import { Menu } from '../types';
import UL from './styles';

const LeftMenu = () => (
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
  { title: 'example1', url: '/example1' },
  { title: 'example2', url: '/example2' },
  { title: 'example3', url: '/example3' },
  { title: 'example4', url: '/example4' },
  { title: 'example5', url: '/example5' },
];
export default LeftMenu;
