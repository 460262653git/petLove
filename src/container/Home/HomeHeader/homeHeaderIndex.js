import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

import './homeHeaderLess.less';
import logo from '../../../images/homeLogo.jpg'

export default class HomeHeader extends Component{
    render(){
        return (
            <div className='mHome-header'>
                <div className='mHome-logo'>
                    <img src={logo}/>
                    <div className='mHome-list'>
                        <Link to='/login'>
                            登录
                        </Link>
                        <span>/</span>
                        <Link to='/signup'>
                            注册
                        </Link>
                    </div>
                </div>
                <ul className='mHome-menu'>
                    <li>首页</li>
                    <li>狗狗</li>
                    <li>猫猫</li>
                    <li>兔子</li>
                    <li>老鼠</li>
                    <li>宠物鸟</li>
                    <li>宠物龟</li>
                    <li>宠物鱼</li>
                    <li>其他</li>
                </ul>
            </div>
        )
    }
}
