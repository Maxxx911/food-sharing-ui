import { FC } from 'react';
import clsx from 'clsx';

import { Props } from './type';
import {
  BUTTON_THEME_FILLED,
  BUTTON_THEME_OUTLINE,
  BUTTON_VARIANT_NORMAL,
  BUTTON_VARIANT_SMALL,
  BUTTON_VARIANT_VERY_BIG,
} from '@/app/components/atoms/Button/constants';

import '@/app/components/atoms/Button/styles.css';

const VARIANT_TO_CLASS_NAME = {
  [BUTTON_VARIANT_NORMAL]: '',
  [BUTTON_VARIANT_VERY_BIG]: 'very-big',
  [BUTTON_VARIANT_SMALL]: '',
};

const THEME_TO_CLASS_NAME = {
  [BUTTON_THEME_OUTLINE]: '',
  [BUTTON_THEME_FILLED]: 'filled',
};

const Button: FC<Props> = ({ title, onClick, variant = 'normal', theme = 'filled' }) => {
  return (
    <button className={clsx('button', VARIANT_TO_CLASS_NAME[variant], THEME_TO_CLASS_NAME[theme])} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
