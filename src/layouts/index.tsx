import React, { ReactNode, FC } from 'react';
import styles from './index.module.css';
import { Icon, Typography, Menu } from 'antd';
import DrawerResult from '../components/DrawerResult';

interface Arg {
  children: ReactNode;
  path: string;
  [other: string]: any;
}
const Layout: FC<{ children: ReactNode; path: string }> = ({
  children,
  path,
}: Arg) => {
  return (
    <div className={styles.pageLayout}>
      <header className={styles.header}>
        <div className={styles.wrapHeaderContent}>
          <div className={styles.headerLeftSide}>
            <Icon className={styles.imgIcon} type="thunderbolt" />
            <Typography.Title level={4} className={styles.siteTitle}>
              Get Link Project
            </Typography.Title>
          </div>
          <div className={styles.headerRightSide}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={[path]}
              selectedKeys={[path]}
              overflowedIndicator={<Icon type="menu" />}
            >
              <Menu.Item key="/">Home</Menu.Item>
              <Menu.Item key="/usage-guide">Usage Guide</Menu.Item>
              <Menu.Item key="/about-project">About The Project</Menu.Item>
              <Menu.Item key="/contact-me">Contact Me</Menu.Item>
            </Menu>
          </div>
        </div>
      </header>
      {/*body component*/}
      <div className={styles.body}>{children}</div>
      {/*drawer result */}
      <div className={styles.wrapDrawer}>
        <DrawerResult />
      </div>
      <footer className={styles.footer}>Made with </footer>
    </div>
  );
};

//using in gatsby layout
interface Arg2 {
  element: ReactNode;
  props: {
    path: string;
  };
}
const GatsbyLayout: FC<{
  element: React.ReactNode;
  props: {
    path: string;
  };
}> = ({ element, props }: Arg2) => <Layout {...props}>{element}</Layout>;

export default GatsbyLayout;
