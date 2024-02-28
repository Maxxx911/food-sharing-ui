import { FC } from 'react';
import Link from 'next/link';

import { LinkItemProps, ListItemProps, TextListItemProps } from '@/app/components/atoms/TextList/type';
import '@/app/components/atoms/TextList/styles.css';

const TextItem: FC<ListItemProps> = ({ title, icon: Icon }) => (
  <div className="list-item-container">
    {Icon && <span className="list-item-icon">{<Icon />}</span>}
    <span className="list-item-title">{title}</span>
  </div>
);

const LinkItem: FC<LinkItemProps> = ({ title, icon, to = '/' }) => (
  <>
    <Link href={to}>
      <TextItem title={title} icon={icon} />
    </Link>
  </>
);

const TextListItem: FC<TextListItemProps> = ({ isLink, ...props }) => (
  <li>{isLink ? <LinkItem {...props} /> : <TextItem {...props} />}</li>
);

export default TextListItem;
