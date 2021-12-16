import { Dispatch, SetStateAction } from 'react';

export interface imgUrl {
  imgUrl: string;
}

export interface props {
  imgData?: imgUrl[];
  currentSlide: number;
  index?: number;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
}
