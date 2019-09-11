import React from 'react';
import { Drawer, Icon } from 'antd';
import styles from './index.module.css';

const DrawerResult: React.FC = () => {
  return (
    <div className={styles.drawerContent}>
      <Icon
        className={styles.iconOpenDrawer}
        type="left-circle"
        theme="filled"
      />
    </div>
  );
};

export default DrawerResult;
