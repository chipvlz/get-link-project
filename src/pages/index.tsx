import React from 'react';
import styles from './index.module.css';
import { message, Input, Icon } from 'antd';
import { searchBoxChangeValue } from '@redux-dir/actions/search-box-value';
import { getLinkRequest } from '@redux-dir/actions/server-response';
import { useDispatch, useSelector } from 'react-redux';
import typeCheckUrl from '../utils/type-check-url';
const { Search } = Input;

const Index: React.FC = () => {
  message.config({
    maxCount: 3,
  });
  const dispatch = useDispatch();
  const isFetching: bool = useSelector(
    state => state.serverResponse.isFetching
  );
  const inputValue: string = useSelector(state => state.searchBoxValue);
  const handleGetLink = (): void => {
    const valid = typeCheckUrl(inputValue);
    if (valid) {
      dispatch(getLinkRequest(inputValue));
      message.info('Getting link, please wait...');
    } else {
      message.error('Url not valid, try again!');
    }
  };
  return (
    <div className={styles.wrapBody}>
      <div className={styles.wrapSearchBox}>
        <Search
          disabled={isFetching}
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
          onClick={(e): void => e.currentTarget.select()}
        />
      </div>
    </div>
  );
};
export default Index;
