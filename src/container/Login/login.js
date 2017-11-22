import React,{Component} from 'react';

import actions from '../../store/actions/session.js'
import {connect} from 'react-redux'
import './login.less'
import Message from "../../component/Message/message";

class Login extends Component{
    goBack=()=>{
        this.props.history.goBack();
    };
    handleLogin=()=>{
        // let username = this.username.value;
        // let userStr = localStorage.getItem('users');
        // let users = userStr?JSON.parse(userStr):[];
        // users.push(username);
        // localStorage.setItem('users',JSON.stringify(users));
        // this.props.history.push('/profile')
        let username = this.username.value;
        let password = this.password.value;
        let tel = this.tel.value;
        this.props.login({username,password,tel})
    };
    render(){
        return (
            <div className='mLogin'>
                <div className='mLogin-header'>
                    <i onClick={this.goBack} className='iconfont icon-fanhui'></i>
                    <span>登录</span>
                </div>
                <div className='mLogin-logo'>
                    <img src={require('../../images/profile.png')}/>
                </div>
                <div className='mLogin-submit'>
                    用户名：<input ref={input=>this.username=input} placeholder='请输入用户名' type="text"/>
                    <br/>
                    手机号：<input ref={input=>this.tel=input} placeholder='请输入手机号' type="text"/>
                    <br/>
                    密&nbsp;&nbsp;&nbsp;码：<input ref={input=>this.password=input} placeholder='请输入密码' type="text"/>
                    <div className='mLogin-button' onClick={this.handleLogin} >登&nbsp;录</div>
                    <Message {...this.props}/>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions
)(Login)
