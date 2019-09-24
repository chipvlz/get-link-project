import React from 'react';
import { Card, Typography } from 'antd';
import styles from './contact-me.module.css';

const { Text } = Typography;

const AboutMe: React.FC = () => {
  return (
    <div className={styles.wrapContactMe}>
      <Card
        title="My Social Links"
        bordered
        className={styles.items}
        headStyle={{ fontSize: '1.3rem', textAlign: 'center' }}
      >
        <p className={styles.feelFree}>
          <Text strong>
            Feel free to contact me via any the following links:
          </Text>
        </p>
        <p>
          <Text>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="mailto:vuhuucuong97@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              vuhuucuong97@gmail.com
            </a>
          </Text>
        </p>
        <p>
          <Text>
            Facebook:&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://facebook.com/vuhuucuong97"
              rel="noopener noreferrer"
              target="_blank"
            >
              fb.com/vuhuucuong97
            </a>
          </Text>
        </p>
        <p>
          <Text>
            Twitter:&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://twitter.com/vuhuucuong97"
              rel="noopener noreferrer"
              target="_blank"
            >
              @vuhuucuong97
            </a>
          </Text>
        </p>
        <p>
          <Text>
            Github:&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://github.com/kencoder97"
              rel="noopener noreferrer"
              target="_blank"
            >
              github.com/kencoder97
            </a>
          </Text>
        </p>
        <p>
          <Text>
            Stack Overflow:&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://stackoverflow.com/users/7811940/vu-huu-cuong"
              rel="noopener noreferrer"
              target="_blank"
            >
              users/7811940/vu-huu-cuong
            </a>
          </Text>
        </p>
        <p>
          <Text>
            Linked In:&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/in/vuhuucuong/"
              rel="noopener noreferrer"
              target="_blank"
            >
              in/vuhuucuong
            </a>
          </Text>
        </p>
      </Card>
    </div>
  );
};
export default AboutMe;
