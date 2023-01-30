import Heads from '@/layouts/Head';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { Layout } from 'antd';
import type { PropsWithChildren } from 'react';
import React from 'react';
const { Sider, Content } = Layout;
const HeadsIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Heads} style={{ height: '2em', width: '2em' }} {...props} />
);
const main: React.FC = (props: PropsWithChildren<any>, context) => {
  console.log(props, context);
  return (
    <Layout style={{ height: '100%' }}>
      <Sider
        width={300}
        className="rounded-md"
        style={{ backgroundColor: 'var(--layoutHeaderBackground)' }}
      >
        <div className="text-center mt-3">
          <HeadsIcon className="text-7xl" />
          <div>正在坐着绿皮火车寻找目标。。。</div>
        </div>
      </Sider>
      <Content />
    </Layout>
  );
};
export default main;
