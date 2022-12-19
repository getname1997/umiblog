import type {PropsWithChildren} from 'react';
import React from 'react';
import {Layout} from "antd";

const { Sider, Content } = Layout;
const main: React.FC = (props: PropsWithChildren<any> , context) => {
    console.log(props, context);
return<Layout style={{height:'100%'}}>
        <Sider width={300}>侧边</Sider>
        <Content>祖业</Content>
    </Layout>
}
export default main;
