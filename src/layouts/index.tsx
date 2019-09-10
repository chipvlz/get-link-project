import React, { ReactNode, ReactElement, FC } from 'react';
import styles from './index.module.css';
import { Icon, Typography, Menu } from 'antd';

type args = {
  children: ReactNode;
  path: string;
};

const Layout: FC = ({ children, path }: args) => {
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
            <Menu mode="horizontal" defaultSelectedKeys={[path]}>
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
      <footer className={styles.footer}>Made with </footer>
    </div>
  );
};

//using in gatsby layout
type args2 = {
  element: ReactElement;
  props: object;
};
const GatsbyLayout: FC = ({ element, props }: args2) => (
  <Layout {...props}>{element}</Layout>
);

export default GatsbyLayout;
