import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import './tabLess.less'

export default class Tab extends Component{
    render(){
        return (
            <nav className='mTabs'>
                <NavLink exact to='/'>
                    <i></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to='/search'>
                    <i></i>
                    <span>搜索</span>
                </NavLink>
                <NavLink exact to='/profile'>
                    <i></i>
                    <span>个人中心</span>
                </NavLink>
            </nav>
        )
    }
}
