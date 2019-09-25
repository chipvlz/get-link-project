import React, { ReactNode, FC } from 'react';
import styles from './index.module.css';
import { Icon, Typography, Menu } from 'antd';
import DrawerResult from '../components/DrawerResult';
import { useSelector } from 'react-redux';
import Helmet from 'react-helmet';
import ProgressBar from '../components/ProgressBar';
import { Link } from 'gatsby';

interface LayoutParams {
  children: ReactNode;
  location: {
    pathname: string;
  };
  [other: string]: any;
}

const Layout: FC<LayoutParams> = ({ children, location }: LayoutParams) => {
  const showIcon: boolean = useSelector(state => state.drawer.showIcon);
  const isFetching: boolean = useSelector(
    state => state.serverResponse.isFetching
  );
  return (
    <div className={styles.pageLayout}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Get Link Project - @kencoder97</title>
        <link rel="canonical" href="https://link.kencoding.com" />
      </Helmet>
      <header className={styles.header}>
        <ProgressBar isLoading={isFetching} />
        <div className={styles.wrapHeaderContent}>
          <div className={styles.headerLeftSide}>
            <Link to="/">
              <Icon
                onClick={(): void => navigate('/')}
                className={styles.imgIcon}
                type="thunderbolt"
              />
            </Link>
            <Link to="/">
              <Typography.Title level={4} className={styles.siteTitle}>
                Get Link Project
              </Typography.Title>
            </Link>
          </div>
          <div className={styles.headerRightSide}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={[location.pathname]}
              selectedKeys={[location.pathname]}
              overflowedIndicator={<Icon type="menu" />}
            >
              <Menu.Item key="/">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="/about-project">
                <Link to="/about-project">About The Project</Link>
              </Menu.Item>
              <Menu.Item key="/contact-me">
                <Link to="/contact-me">Contact Me</Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </header>
      {/*body component*/}
      <div className={styles.body}>{children}</div>
      {/*drawer result */}
      <div className={styles.wrapDrawer}>{showIcon && <DrawerResult />}</div>
      <footer className={styles.footer}>
        Made with&nbsp;
        <svg width="1em" height="1em" fill="#F5222D" viewBox="0 0 1024 1024">
          <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
        </svg>
        &nbsp;by&nbsp;
        <a
          href="https://github.com/kencoder97"
          rel="noopener noreferrer"
          target="_blank"
        >
          @kencoder97
        </a>
      </footer>
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
