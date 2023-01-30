import React from 'react';
// @ts-ignore
import { Outlet } from 'umi';
import styles from './index.less';
import Icon, {
  HomeOutlined,
  ProfileOutlined,
  SettingOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Input, Button, Badge } from 'antd';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Heads from '@/layouts/Head';
// animate-spin
const HeadsIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Heads} style={{ height: '2em', width: '2em' }} {...props} />
);

export default function Layout() {
  const { Search } = Input;
  const onSearch = (val: string) => {
    console.log('search', val);
  };
  return (
    <div>
      <div className={styles.layoutHeader}>
        <div className={styles.layoutHeader_left}>
          <Search style={{ width: 350 }} placeholder="查找文章" onSearch={onSearch} enterButton />
        </div>
        <div className={styles.layoutHeader_right}>
          <HeadsIcon className="text-3xl" />
          <Button className={styles.layoutHeader_right_button}>
            <ProfileOutlined className="text-2xl" />
            <div className="text-sm">文章列表</div>
          </Button>
          <Button className={styles.layoutHeader_right_button}>
            <Badge count={10}>
              <MailOutlined className="text-2xl" />
            </Badge>
            <div className="text-sm">消息</div>
          </Button>
          {/*<MailOutlined />*/}
          <Button className={styles.layoutHeader_right_button}>
            <SettingOutlined className="text-2xl" />
            <div className="text-sm">设置</div>
          </Button>
          <Button className={styles.layoutHeader_right_button}>
            <HomeOutlined className="text-2xl" />
            <div className="text-sm">主页</div>
          </Button>
        </div>
      </div>
      <div className={styles.layoutContent}>
        <Outlet />
      </div>
    </div>
  );
}
