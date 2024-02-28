'use client';

import { FC, useCallback } from 'react';

import Button from '@/app/components/atoms/Button';
import { SIDE_NAV_ITEMS } from '@/app/components/organisms/SideNavPanel/constants';
import TextList from '@/app/components/atoms/TextList';
import '@/app/components/organisms/SideNavPanel/styles.css';

const SideNavPanel: FC = () => {
  const handleClickSignIn = useCallback(() => {}, []);

  return (
    <div className="navbar-container">
      <div className="info-container">
        <h1 className="nav-title">Food Sharing</h1>
      </div>
      <div className="user-container">
        {/* TODD Add cheking isUserLogin */}
        <div className="user-container-button">
          <Button onClick={handleClickSignIn} variant="very-big" title="SignIn" />
        </div>
      </div>
      <div className="mt-12">
        <TextList items={SIDE_NAV_ITEMS}></TextList>
      </div>
      <div className="map-container"></div>
    </div>
  );
};

export default SideNavPanel;
