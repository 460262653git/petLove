/*
import React,{Component} from 'react';
import Modal from 'react-modal'

import './dialog.less'

export default class Dialog extends Component{
    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }
    afterOpenModal() {
        this.subtitle.style.color = '#f00';
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    render(){
        const customStyles = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
            }
        };
        console.log('abc');
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.props.afterOpenModal}
                    onRequestClose={this.props.closeModal}
                    style={this.props.customStyles||customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
            </div>
        )
    }
}
*/
import React,{Component} from 'react';
import './dialog.less'
export default class Dialog extends Component{
    render(){
        console.log(this.props.isShow);
        return (
            <div>
                {
                    this.props.isShow?
                        <div className="dialog-cover">

                            <div className='dialog-form'>
                                <span className='dialog-close'>×</span>
                                <p className='dialog-text'>添加新收获地址</p>
                                <div className='dialog-input'>
                                    <input type="text" placeholder='姓名'/><i className='dialog-line'>|</i><input type="text"　placeholder='电话'/>
                                </div>
                                <div className='dialog-detailed'>
                                    <input type="text" placeholder='请输入详细地址'/>
                                </div>
                                <div className='dialog-btn'>
                                    <button　className='dialog-keep'>保存</button>
                                </div>
                            </div>
                        </div>
                        :null
                }
            </div>
        )
    }
}
