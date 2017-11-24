import React,{Component} from 'react';
import './address.less'
import Dialog from '../../../component/Dialog/dialog'

import {fetchAddress} from "../../../api/profile";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state=({
            modalIsOpen:false,
            address:[]
        });
    }
    handleClick=()=>{
        this.props.history.goBack();
    };
    addAddress=()=>{
        this.setState({
            modalIsOpen:true
        })
    };
    componentDidMount(){
        fetchAddress().then(res=>{
            console.log(100);
            this.setState({
                addressList:[...res]
            })
        })
    }
    render(){
        console.log(this.state.address);
        return (
            <div className='mAddress'>
                <div className='mAddress-header'>
                    <i onClick={this.handleClick} className='iconfont icon-fanhui'></i>
                    <span>收货地址</span>
                </div>
                <div className='add-address'>
                    <ul className='address-group'>
                        {
                            this.state.address.map((item,index)=>(
                                <li className='address-list'>
                                    <div className='info'>
                                        <span className='add-name'>{item.name}</span>
                                        <span className='add-tel'>{item.tel}</span>
                                        <p className='add-text'>{item.detailedAddress}</p>
                                    </div>
                                    <div className='revise'>
                                <span className='span1'>
                                    <i className='iconfont icon-bianji'></i>
                                    编辑
                                </span>
                                        <span className='span2'>
                                    <i className='iconfont icon-shanchu'></i>
                                    删除
                                </span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div onClick={this.addAddress} className='add-btn'>
                        <button className='button'>
                            +
                        </button>
                        新增地址
                        <Dialog isShow={this.state.modalIsOpen} />
                    </div>
                </div>
            </div>
        )
    }
}