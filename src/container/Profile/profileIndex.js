import React,{Component} from 'react';
import './profileLess.less'

import {NavLink,Link} from 'react-router-dom';
import {connect} from 'react-redux';

export default class Profile extends Component{
    render(){
        return (
            <div className='mProfile'>
                <div className='mProfile-bg'>
                    <img src={require('../../images/profile.png')}/>
                    <p className='mProfile-name'>今天为明天
                        <i className='iconfont icon-icon-yxj-edit'></i>
                    </p>
                </div>
                <div className='mProfile-order'>
                    <p className='mOrder'>我的订单</p>
                    <nav className='mProfile-favourable'>
                        <NavLink exact to='/favourable'>
                            <i className='iconfont icon-youhuiquanquanmian'></i>
                            <span>优惠券</span>
                        </NavLink>
                        <NavLink to='/collect'>
                            <i className='iconfont icon-shoucang'></i>
                            <span>收藏</span>
                        </NavLink>
                        <NavLink to='/footprint'>
                            <i className='iconfont icon-zuji'></i>
                            <span>足迹</span>
                        </NavLink>
                        <NavLink to='/service'>
                            <i className='iconfont icon-fuwu'></i>
                            <span>售后/服务</span>
                        </NavLink>
                    </nav>
                    <div className='mProfile-address'>
                        <Link to='/address'>
                            <i className='iconfont icon-dizhi'></i>
                            <span>收货地址</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}