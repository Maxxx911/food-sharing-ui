import { FC, Key } from 'react';

import TextListItem from './TextListItem';
import { TextListProp } from './type';

const TextList: FC<TextListProp> = ({ items }) => {
  return (
    <ul className="list-items-container">
      {items.map((item) => (
        <TextListItem key={item.title as Key} {...item} />
      ))}
    </ul>
  );
};

export default TextList;
