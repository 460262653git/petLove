import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import './tabLess.less'

export default class Tab extends Component{
    render(){
        return (
            <nav className='mTabs'>
                <NavLink exact to='/'>
                    <i className='icon icon-shouye'></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to='/search'>
                    <i className='icon icon-sousuo'></i>
                    <span>搜索</span>
                </NavLink>
                <NavLink exact to='/profile'>
                    <i className='icon icon-tag9'></i>
                    <span>个人中心</span>
                </NavLink>
            </nav>
        )
    }
}
