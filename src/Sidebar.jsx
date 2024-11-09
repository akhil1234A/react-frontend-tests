import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" style={{ color: 'white', textAlign: 'center', padding: '20px', fontSize: '20px' }}>
          Admin Panel
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User Management">
            <Menu.Item key="1">
              <a href="/admin/users">View Users</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="/admin/users/roles">Manage Roles</a>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Category Management">
            <Menu.Item key="3">
              <a href="/admin/categories">View Categories</a>
            </Menu.Item>
            <Menu.Item key="4">
              <a href="/admin/categories/add">Add Category</a>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" icon={<ShoppingOutlined />} title="Product Management">
            <Menu.Item key="5">
              <a href="/admin/products/add">Add Product</a>
            </Menu.Item>
            <Menu.Item key="6">
              <a href="/admin/products/view">View Products</a>
            </Menu.Item>
            <Menu.Item key="7">
              <a href="/admin/products/variants">Manage Variants</a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '100vh' }}>
            {/* You can add routing or dynamic content here */}
            <h2>Welcome to the Admin Dashboard</h2>
            <p>Select an option from the sidebar to manage users, categories, or products.</p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Sidebar;
