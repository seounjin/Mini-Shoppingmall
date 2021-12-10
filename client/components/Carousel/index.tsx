import { Ul } from './styles';
import useCarousel from '../../hooks/useCarousel.js';
import React from 'react';

const Carousel = () => {
  return (
    <Ul>
      {MAIN_IMAGE.map((data, index) => {
        return (
          <li key={index}>
            <img src={data.imgUrl}></img>
          </li>
        );
      })}
    </Ul>
  );
};

const MAIN_IMAGE = [
  { imgUrl: '/img1.jpg' },
  { imgUrl: '/img2.jpg' },
  { imgUrl: '/img3.jpg' },
];

export default Carousel;
