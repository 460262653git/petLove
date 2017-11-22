import React,{Component} from 'react';
import './message.less'

export default class Message extends Component{
    render(){
        return (
            <div>
                {
                    this.props.error&&<div className='message-error'>{this.props.error}</div>
                }
                {
                    this.props.success&&<div className='message-success'>{this.props.success}</div>
                }
            </div>
        )
    }
}
