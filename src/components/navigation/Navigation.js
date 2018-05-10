import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Row, Avatar, Layout, Menu, Icon } from 'antd';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import imgProfil from '../../assets/img_profil.png';
import './css/Navigation.css';

class Navigation extends Component {
    
    state = { collapsed: false }

    toggleCollapsed = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }
    

    render() {
        var pathname = this.props.location.pathname.replace('/', '') || 'home';
        const selectedKey = (pathname !== '') ? pathname : 'home';
        return (
            <Layout.Sider collapsible collapsed={this.state.collapsed} onCollapse={this.toggleCollapsed} className="navigation_slider_fixed">
                <div className="navigation_header">
                    <Row type="flex" justify="center">
                        <Avatar
                            size="large"
                            shape="circle"
                            src={imgProfil} />
                    </Row>
                    { !this.state.collapsed &&
                        <Row type="flex" justify="center" style={{marginTop: 13}}>
                            <h2>Jean-Charles</h2>
                            <h2>Moussé</h2>
                        </Row>
                    }
                </div>
                <Menu theme="dark" defaultSelectedKeys={[selectedKey]} mode="inline">
                    <Menu.Item key="home">
                        <Link to="/home">
                            <Icon type="home" className="navigation_icon" />
                            <span>Accueil</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Link to="/about">
                            <Icon type="user" className="navigation_icon" />
                            <span>A propos</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="skills">
                        <Link to="/skills">
                            <Icon type="setting" className="navigation_icon" />
                            <span>Compétences</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="projects">
                        <Link to="/projects">
                            <Icon type="eye-o" className="navigation_icon" />
                            <span>Projets</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="contact">
                        <Link to="/contact">
                            <Icon type="mail" className="navigation_icon" />
                            <span>Contact</span>
                        </Link>
                    </Menu.Item>
                    { /*
                    <Menu.SubMenu key="sub1" title={<span><Icon type="user" /><span>User</span></span>}>
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="sub2" title={<span><Icon type="team" /><span>Team</span></span>}>
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </Menu.SubMenu>
                    */ }
                </Menu>
            </Layout.Sider>
        );
    }
}

export default withRouter(Navigation);