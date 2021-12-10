import { Menu } from '../types';
import UL from './styles';
import Link from 'next/link';

const LeftMenu = () => (
  <UL>
    {LEFT_MENU.map((data, index) => {
      return (
        <li key={index}>
          <Link href={data.url}>{data.title}</Link>
        </li>
      );
    })}
  </UL>
);

const LEFT_MENU: Menu[] = [
  { title: 'Skill', url: '/skill' },
  { title: 'Item', url: '/item' },
  { title: 'Character', url: '/character' },
  { title: 'Accessories', url: '/accessories' },
  { title: 'Picture', url: '/picture' },
];
export default LeftMenu;
