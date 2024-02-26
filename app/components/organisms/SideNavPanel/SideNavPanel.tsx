'use client';

import { FC, useCallback } from 'react';

import Button from '@/app/components/atoms/Button';
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
      <div className="map-container"></div>
    </div>
  );
};

export default SideNavPanel;
