'use client';

import { FC } from 'react';

import '@/app/components/organisms/SideNavPanel/styles.css';

const SideNavPanel: FC = () => {
  return (
    <div className="navbar-container">
      <div className="info-container">
        <h1 className="nav-title">Food Sharing</h1>
      </div>
      <div className="map-container"></div>
    </div>
  );
};

export default SideNavPanel;
