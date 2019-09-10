import React from 'react';
import styles from './index.module.css';
import { Input, Icon } from 'antd';
import { searchBoxChangeValue } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const { Search } = Input;

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const inputValue: string = useSelector(
    (state): string => state.searchBoxValue
  );
  return (
    <div className={styles.wrapBody}>
      <div className={styles.wrapSearchBox}>
        <Search
          placeholder="Enter Your Link"
          enterButton={
            <>
              <Icon type="api" /> GET LINK
            </>
          }
          size="large"
          value={inputValue}
          onSearch={(value): void => console.log(value)}
          onChange={(e): void => dispatch(searchBoxChangeValue(e.target.value))}
        />
      </div>
    </div>
  );
};
export default Index;
