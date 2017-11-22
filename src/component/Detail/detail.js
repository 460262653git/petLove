import React, {Component} from 'react';

import './detail.less';
import {fetchPet} from '../../api/home'

export default class Home extends Component {
    constructor() {
        super();
        this.state = ({
            pet: {
                habitat: '',
                id: '',
                information:'',
                name: '',
                referencePrice: '',
                shape: '',
                url: ''

            }
        })
    }
    handleClick = () => {
        this.props.history.goBack();
    };
    componentDidMount() {
        fetchPet(this.props.match.params.id).then(res => {
            console.log(res);
            this.setState({
                pet: {...res}
            })
        })
    }
    render() {
        return (
            <div className='mDetail'>
                <div className='mDetail-header'>
                    <i onClick={this.handleClick} className='iconfont icon-fanhui'></i>
                    <span>爱宠详情</span>
                </div>
                <div className='mDetail-scroll'>
                    <div className='mDetail-introduce'>
                        <div className='mDetail-pic'>
                            <img src={this.state.pet.url}/>
                        </div>
                        <div className='mDetail-info'>
                            <p className='name'>{this.state.pet.name}</p>
                            <span className='habitat'>原产地：{this.state.pet.habitat}</span>
                            <span className='shape'>体型：{this.state.pet.shape}</span>
                            <p className='price'>￥ {this.state.pet.referencePrice}</p>
                            <div className='shoucang'>
                                <i className='iconfont icon-shoucang'></i>
                            </div>
                            <div className='information'>
                                {this.state.pet.information}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}