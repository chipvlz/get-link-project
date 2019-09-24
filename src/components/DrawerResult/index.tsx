import React from 'react';
import { Drawer, Icon, Card, Tag } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { openDrawer, closeDrawer } from '../../redux/actions/drawer';
import styles from './index.module.css';
import listColor from '../../utils/list-color';

const DrawerResult: React.FC = () => {
  const isOpenDrawer = useSelector(state => state.drawer.isOpen);
  const response = useSelector(state => state.serverResponse.response);
  const dispatch = useDispatch();
  Icon.setTwoToneColor('#f5222d');
  const closeDrawerDispatch = (): any => dispatch(closeDrawer());
  const openDrawerDispatch = (): any => dispatch(openDrawer());
  const getFormat = (format: string, formatId: string): string => {
    const re = /^.*?\s-?\s(.+)/;
    const res = format.match(re);
    return res ? (res[1] !== 'unknown' ? res[1] : formatId) : format;
  };
  return (
    <div className={styles.drawerContent}>
      <div className={styles.wrapIcon} onClick={openDrawerDispatch}>
        <Icon
          className={styles.iconButton}
          type="left-circle"
          theme="twoTone"
        />
      </div>

      <Drawer
        title="Select download type:"
        placement="right"
        onClose={closeDrawerDispatch}
        visible={isOpenDrawer}
        width="50%"
      >
        <>
          {response && response.both && (
            <Card
              title="Video with sound"
              bordered={false}
              className={styles.cardLink}
            >
              <p>
                {response.both.map(
                  (link, index): React.ReactNode => (
                    <Tag
                      onClick={(): Window | null =>
                        window.open(link.url, '_blank')
                      }
                      className={styles.tagLink}
                      color={listColor[index] ? listColor[index] : listColor[0]}
                      key={link.url}
                    >
                      {`${getFormat(link.format, link.format_id)}.${link.ext}`}
                    </Tag>
                  )
                )}
              </p>
            </Card>
          )}
          {response && response.video && (
            <Card
              title="Video only"
              bordered={false}
              className={styles.cardLink}
            >
              <p>
                {response.video.map(
                  (link, index): React.ReactElement => (
                    <Tag
                      onClick={(): Window | null =>
                        window.open(link.url, '_blank')
                      }
                      className={styles.tagLink}
                      color={listColor[index] ? listColor[index] : listColor[0]}
                      key={link.url}
                    >
                      {`${getFormat(link.format, link.format_id)}.${link.ext}`}
                    </Tag>
                  )
                )}
              </p>
            </Card>
          )}
          {response && response.audio && (
            <Card
              title="Audio only"
              bordered={false}
              className={styles.cardLink}
            >
              <p>
                {response.audio.map((link, index) => (
                  <Tag
                    onClick={(): Window | null =>
                      window.open(link.url, '_blank')
                    }
                    className={styles.tagLink}
                    color={listColor[index] ? listColor[index] : listColor[0]}
                    key={link.url}
                  >
                    {`${getFormat(link.format, link.format_id)}.${link.ext}`}
                  </Tag>
                ))}
              </p>
            </Card>
          )}
        </>
      </Drawer>
    </div>
  );
};

export default DrawerResult;
