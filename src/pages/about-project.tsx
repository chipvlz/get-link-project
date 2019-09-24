import React from 'react';
import { Card, Tag } from 'antd';
import styles from './about-project.module.css';
import reactImg from '../images/react.svg';
import reduxImg from '../images/redux.svg';
import gatsbyImg from '../images/gatsby.svg';
import tsImg from '../images/typescript.svg';
import nodeImg from '../images/node.svg';
import awsImg from '../images/aws.svg';
import nginxImg from '../images/nginx.svg';
import dockerImg from '../images/docker.svg';
import netlifyImg from '../images/netlify.svg';
import circleImg from '../images/circleci.svg';

const headStyle = {
  fontSize: '1.3rem',
};
const AboutProject: React.FC = () => {
  return (
    <div className={styles.wrapAbout}>
      <Card
        title="Front End"
        bordered
        className={styles.items}
        headStyle={headStyle}
      >
        <p>
          <Tag className={styles.tag} color="magenta">
            <img className={styles.icon} src={reactImg} />
            &nbsp;React
          </Tag>
          <Tag className={styles.tag} color="red">
            <img className={styles.icon} src={reduxImg} />
            &nbsp;Redux
          </Tag>
          <Tag className={styles.tag} color="volcano">
            <img className={styles.icon} src={gatsbyImg} />
            &nbsp;Gatsby
          </Tag>
          <Tag className={styles.tag} color="orange">
            <img className={styles.icon} src={tsImg} />
            &nbsp;TypeScript
          </Tag>
        </p>
      </Card>
      <Card
        title="Back End"
        bordered
        className={styles.items}
        headStyle={headStyle}
      >
        <p>
          <Tag className={styles.tag} color="gold">
            <img className={styles.icon} src={nodeImg} />
            &nbsp;NodeJS(Express)
          </Tag>
          <Tag className={styles.tag} color="orange">
            <img className={styles.icon} src={tsImg} />
            &nbsp;TypeScript
          </Tag>
        </p>
      </Card>
      <Card
        title="Server and Deployment"
        bordered
        className={styles.items}
        headStyle={headStyle}
      >
        <p>
          <Tag className={styles.tag} color="green">
            <img className={styles.icon} src={awsImg} />
            &nbsp;AWS EC2
          </Tag>
          <Tag className={styles.tag} color="cyan">
            <img className={styles.icon} src={dockerImg} />
            &nbsp;Docker
          </Tag>
          <Tag className={styles.tag} color="blue">
            <img className={styles.icon} src={nginxImg} />
            &nbsp;Nginx
          </Tag>
          <Tag className={styles.tag} color="geekblue">
            <img className={styles.icon} src={netlifyImg} />
            &nbsp;Netlify
          </Tag>
          <Tag className={styles.tag} color="purple">
            <img className={styles.icon} src={circleImg} />
            &nbsp;CircleCI
          </Tag>
        </p>
      </Card>
    </div>
  );
};
export default AboutProject;
