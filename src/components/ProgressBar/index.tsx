import React, { useState, useEffect } from 'react';
import { Progress } from 'antd';
import styles from './index.module.css';

interface Props {
  isLoading: boolean;
}
const ProgressBar: React.FC<Props> = ({ isLoading }: Props) => {
  const [percent, setPercent] = useState(0);
  const [show, setShow] = useState(isLoading);
  useEffect(() => {
    let interval;
    let timeout;
    if (isLoading) {
      setShow(true);
      setPercent(0);
      interval = setInterval(() => {
        setPercent(prev => {
          if (prev <= 77.5) {
            return prev + 2.5;
          } else if (prev <= 89.5) {
            return prev + 0.5;
          } else {
            clearInterval(interval);
            return 90;
          }
        });
      }, 50);
    } else {
      setPercent(100);
      timeout = setTimeout(() => {
        setShow(false);
      }, 500);
    }
    return (): void => {
      clearTimeout(timeout);
      clearInterval(interval);
      setPercent(100);
    };
  }, [isLoading]);
  return (
    <>
      {show && (
        <Progress
          className={`${styles.progressBar} `}
          percent={percent}
          status="active"
          showInfo={false}
          strokeLinecap="square"
        />
      )}
    </>
  );
};

export default ProgressBar;
