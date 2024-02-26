import { FC } from 'react';

import '@/app/components/atoms/TextList/style.module.css';

import { TextListItemProps } from './type';

const TextListItem: FC<TextListItemProps> = ({ title, icon }) => {
  return (
    <li>
      <div className="list-item-container">
        {icon && <span className="list-item-icon">{icon}</span>}
        <span className="list-item-title">{title}</span>
      </div>
    </li>
  );
};

export default TextListItem;
