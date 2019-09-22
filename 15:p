import React from 'react';
import { Drawer, Icon } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { openDrawer, closeDrawer } from '../../redux/actions/drawer';
import styles from './index.module.css';

const DrawerResult: React.FC = () => {
  const isOpenDrawer = useSelector(state => state.drawer.isOpen);
  const dispatch = useDispatch();
  Icon.setTwoToneColor('#f5222d');
  const closeDrawerDispatch = (): any => dispatch(closeDrawer());
  const openDrawerDispatch = (): any => dispatch(openDrawer());

  return (
    <div className={styles.drawerContent}>
      <div className={styles.wrapIcon} onClick={openDrawerDispatch}>
        <Icon
          className={styles.iconButton}
          type="left-circle"
          theme="twoTone"
        />
      </div>

      <Drawer
        title="Download links are ready!"
        placement="right"
        onClose={closeDrawerDispatch}
        visible={isOpenDrawer}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default DrawerResult;
