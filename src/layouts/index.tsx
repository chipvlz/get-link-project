import React, { ReactNode, FC } from 'react';
import styles from './index.module.css';
import { Icon, Typography, Menu } from 'antd';
import DrawerResult from '../components/DrawerResult';
import { useSelector } from 'react-redux';
import Helmet from 'react-helmet';

interface LayoutParams {
  children: ReactNode;
  location: {
    pathname: string;
  };
  [other: string]: any;
}
const Layout: FC<LayoutParams> = ({ children, location }: LayoutParams) => {
  const showIcon: boolean = useSelector(state => state.drawer.showIcon);
  return (
    <div className={styles.pageLayout}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Get Link Project - @kencoder97</title>
        <link rel="canonical" href="https://link.kencoding.com" />
      </Helmet>
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
              defaultSelectedKeys={[location.pathname]}
              selectedKeys={[location.pathname]}
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
        {showIcon && <DrawerResult showIcon={showIcon} />}
      </div>
      <footer className={styles.footer}>Made with </footer>
    </div>
  );
};

//using in gatsby layout
interface GatsbyLayoutParams {
  element: ReactNode;
  props: {
    location: {
      pathname: string;
    };
  };
}
const GatsbyLayout: FC<GatsbyLayoutParams> = ({
  element,
  props,
}: GatsbyLayoutParams) => <Layout {...props}>{element}</Layout>;

export default GatsbyLayout;
