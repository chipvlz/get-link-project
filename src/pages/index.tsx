import React from 'react';
import styles from './index.module.css';
import { Input, Icon } from 'antd';
import { searchBoxChangeValue } from '@redux-dir/actions/search-box-value';
import { getLinkRequest } from '@redux-dir/actions/server-response';
import { useDispatch, useSelector } from 'react-redux';

const { Search } = Input;

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state): string => state.searchBoxValue);
  const handleGetLink = (): void => {
    dispatch(getLinkRequest(inputValue));
  };
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
          onSearch={handleGetLink}
          onChange={(e): void => dispatch(searchBoxChangeValue(e.target.value))}
        />
      </div>
    </div>
  );
};
export default Index;
