import React,{Component} from 'react';
import './address.less'
import Dialog from '../../../component/Dialog/dialog'

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={modalIsOpen:false};
    }
    handleClick=()=>{
        this.props.history.goBack();
    };
    addAddress=()=>{
        this.setState({
            modalIsOpen:true
        })
    };
    render(){
        return (
            <div className='mAddress'>
                <div className='mAddress-header'>
                    <i onClick={this.handleClick} className='iconfont icon-fanhui'></i>
                    <span>收货地址</span>
                </div>
                <div className='add-address'>
                    <ul className='address-group'>
                        <li className='address-list'>
                            <div className='info'>
                                <span className='add-name'>王丽</span>
                                <span className='add-tel'>13780209090</span>
                                <p className='add-text'>北京市回龙观东大街</p>
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
// modalIsOpen={true}