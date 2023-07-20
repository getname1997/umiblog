import Heads from '@/layouts/Head';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { Layout } from 'antd';
import type { PropsWithChildren } from 'react';
import React, { useState, useEffect } from 'react';
const { Sider, Content } = Layout;
import styles from './index.less';
import { dataList } from './data';
import server from '@/request/server';
import api from '@/request/api';
const HeadsIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Heads} style={{ height: '2em', width: '2em' }} {...props} />
);
const Main: React.FC = (props: PropsWithChildren<any>, context) => {
  console.log(props, context);
  const [thumb_url, setThumb_url] = useState('');
  const [morningNewPaper, setMorningNewPaper] = useState([...dataList]);
  useEffect(() => {
    server(api.dailyList).then((res) => {
      setThumb_url(res.data.thumb_url);
      setMorningNewPaper(JSON.parse(res.data.daily));
    });
  }, []);
  return (
    <Layout style={{ height: '100%' }}>
      <Sider
        width={300}
        className="rounded-md"
        style={{ backgroundColor: 'var(--layoutHeaderBackground)' }}
      >
        <div className="text-center mt-3">
          <img src={thumb_url} alt="" className={styles.main_img} />
          <HeadsIcon className="text-7xl" />
          <div className={styles.main_text}>正在坐着绿皮火车追寻着人生目标。。。</div>
        </div>
      </Sider>
      <Content>
        <div className="flex flex-col h-full p-16 text-xl">
          <div className="text-center font-bold">每日早報</div>
          {!morningNewPaper
            ? null
            : morningNewPaper.map((item, i) => {
                return (
                  <div className="p-1" key={i}>
                    {item[0]}
                  </div>
                );
              })}
        </div>
      </Content>
    </Layout>
  );
};
export default Main;
