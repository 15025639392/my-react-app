import { Layout, Menu } from 'antd';
import {useToggle} from 'ahooks';
import { useSpring, animated } from 'react-spring';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import s from './index.module.scss';
import loadable from '@loadable/component';
import {routes} from '../../routers';
function Loading(props){
    const {component} = props;
    const LoadableComponent = component?.default? component: loadable(() => component, {
        fallback: <div>loading</div>
    });
    const style = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    return <animated.div style={style}>
        <LoadableComponent/>
    </animated.div>;
}

const { Header, Sider, Content } = Layout;

import {
    Switch,
    Route,
    Link,
    useLocation,
} from 'react-router-dom';

export default function Dashborad () {
    const [collapsed, { toggle }] = useToggle();
    let location = useLocation();
    const Icon = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;
    return (
        <Layout className={s.layout}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {
                        routes.map(item=>{
                            return (
                                <Menu.Item key={item.path}>
                                    <Link to={item.path}>{item.meta.title}</Link>
                                </Menu.Item>
                            );
                        })
                    }
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className={s.header} style={{ padding: 0 }}>
                    <Icon className={s.trigger} onClick={()=>toggle(!collapsed)}/>
                </Header>
                <Content
                    className={`site-layout-background ${s.layoutcontent}`}
                    style={{
                        margin:15
                    }}
                >
                    <Switch location={location}>
                        {
                            routes.map(item=>{
                                return (
                                    <Route 
                                        key={item.path} 
                                        path={item.path} 
                                        children={<Loading component={item.component}/>} 
                                    />
                                );
                            })
                        }
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
}
