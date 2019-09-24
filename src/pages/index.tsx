import React from 'react';
import styles from './index.module.css';
import { message, Input, Icon, Typography, Tag, Tooltip } from 'antd';
import { searchBoxChangeValue } from '@redux-dir/actions/search-box-value';
import { getLinkRequest } from '@redux-dir/actions/server-response';
import { useDispatch, useSelector } from 'react-redux';
import typeCheckUrl from '../utils/type-check-url';
import youtubeImg from '../images/youtube.svg';
import facebookImg from '../images/facebook.svg';
import soundcloudImg from '../images/soundcloud.svg';
import instagramImg from '../images/instagram.svg';
import zingmp3Img from '../images/zingmp3.svg';

const { Search } = Input;
const { Title } = Typography;
const Index: React.FC = () => {
  message.config({
    maxCount: 3,
  });
  const dispatch = useDispatch();
  const isFetching: boolean = useSelector(
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
      <div className={styles.wrapSupport}>
        <Title level={4}>Supported Hosts:</Title>
        <p>
          <Tooltip title="Example: youtube.com/watch?v=h6fcK_fRYaI">
            <Tag className={styles.tag} color="red">
              <img className={styles.icon} src={youtubeImg} />
              &nbsp;Youtube
            </Tag>
          </Tooltip>

          <Tooltip title="Example: facebook.com/GitHub/videos/341250956679550/">
            <Tag className={styles.tag} color="blue">
              <img className={styles.icon} src={facebookImg} />
              &nbsp;Facebook
            </Tag>
          </Tooltip>
          <Tooltip title="Example: soundcloud.com/deamnmusic/deamn-hypnotized">
            <Tag className={styles.tag} color="orange">
              <img className={styles.icon} src={soundcloudImg} />
              &nbsp;SoundCloud
            </Tag>
          </Tooltip>

          <Tooltip title="Example: instagram.com/p/B2zvylRAqJ1/">
            <Tag className={styles.tag} color="volcano">
              <img className={styles.icon} src={instagramImg} />
              &nbsp;Instagram
            </Tag>
          </Tooltip>
          <Tooltip title="Example: zingmp3.vn/video-clip/Loi-Yeu-Ngay-Dai-Kha/ZWAE6EZW.html">
            <Tag className={styles.tag} color="green">
              <img className={styles.icon} src={zingmp3Img} />
              &nbsp;ZingMp3
            </Tag>
          </Tooltip>
        </p>
      </div>
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
