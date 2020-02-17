import React from 'react';
import { Menu, Dropdown, Icon, Affix } from 'antd';
import Link from 'umi/link'
import withRouter from 'umi/withRouter'
const downMenu = (
    <Menu>
        <Menu.Item>
        退出
        </Menu.Item>
    </Menu>
);
const index = ({ location }) => {
    console.log('load', location)
    return <Affix><div className='header'>
        <img className='logo' src={require('@/assets/logo.png')} alt='logo' />
        <Menu
            className='menus'
            mode='horizontal'
            selectedKeys={[location.pathname]}
            theme='dark'>
            <Menu.Item key="1">
                <Link to='/'>首页</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to='/'>用户</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to='/'>周报</Link>
            </Menu.Item>
        </Menu>
        <div className='dropdown'>
            <Dropdown overlay={downMenu} placement="bottomLeft">
                <a style={{ color: '#fff' }} className='ant-dropdown-link' href="http://www.alipay.com/"> <Icon type="user" className='icon' />admin</a>
            </Dropdown>
        </div>
    </div>
    </Affix>
}
export default withRouter(index)