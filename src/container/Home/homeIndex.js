import React,{Component} from 'react';
import './homeLess.less'

import HomeHeader from './HomeHeader/homeHeaderIndex'
import Slider from "./Slider/sliderIndex";
import Kind from "./Kind/index";

import {connect} from 'react-redux'
import actions from '../../store/actions/home'

import {upMore,downRefresh} from '../../utils'

class Home extends Component{
    componentDidMount(){
        if(this.props.sliders.length == 0){
            this.props.getSliders();
            this.props.getKinds();
        }
        upMore(this.refs.content,this.props.getKinds);
        downRefresh(this.refs.content,this.props.getRefresh);
    }
    render(){
        return (
            <div className='mHome'>
                <HomeHeader/>
                <div ref='content' className='mContent'>
                    <Slider sliders={this.props.sliders}/>
                    <Kind
                        getKinds={this.props.getKinds}
                        kinds={this.props.kinds}
                    />
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.home,
    actions
)(Home)