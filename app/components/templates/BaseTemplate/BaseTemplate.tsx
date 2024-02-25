'use client';

import { FC, PropsWithChildren } from 'react';

import SideNavPanel from '@/app/components/organisms/SideNavPanel';

const BaseTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-full">
      <div className="bg-mine-shaft-color w-1/4 ">
        <SideNavPanel />
      </div>
      <div className="bg-prim-color w-3/4">{children}</div>
    </div>
  );
};

export default BaseTemplate;
