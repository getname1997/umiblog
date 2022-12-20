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
      <Sider width={300}>
        <HeadsIcon className="text-3xl" />
      </Sider>
      <Content>祖业s</Content>
    </Layout>
  );
};
export default main;
