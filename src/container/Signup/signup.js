import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from  '../../store/actions/session.js';

import './signup.less'
import Message from "../../component/Message/message";

class Signup extends Component{
    goBack=()=>{
        this.props.history.goBack();
    };
    handleSubmit=()=>{
        let username = this.username.value;
        let password = this.password.value;
        let tel = this.tel.value;
        setTimeout(()=>{
            if( !!username && !!password && !!tel){
                this.props.signup({username,tel,password});
            }
        },1000)
    };
    render(){
        return (
            <div className='mSignup'>
                <div className='mSignup-header'>
                    <i onClick={this.goBack} className='iconfont icon-fanhui'></i>
                    <span>注册</span>
                </div>
                <div className='mSignup-logo'>
                    <img src={require('../../images/profile.png')}/>
                </div>
                <div className='mSignup-submit' onClick={this.handleSubmit}>
                    用户名：<input ref={input=>this.username=input} placeholder='请输入用户名' type="text"/>
                    <br/>
                    手机号：<input ref={input=>this.tel=input} placeholder='请输入手机号' type="text"/>
                    <br/>
                    密&nbsp;&nbsp;&nbsp;码：<input ref={input=>this.password=input} placeholder='请输入密码' type="text"/>
                    <div className='mSignup-button'>注&nbsp;册</div>
                    <Message {...this.props}/>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions
)(Signup)