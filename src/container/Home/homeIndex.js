import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './homeLess.less'

import HomeHeader from './HomeHeader/homeHeaderIndex'
import Slider from "./Slider/sliderIndex";
import Kind from "./Kind/index";

import {connect} from 'react-redux'
import actions from '../../store/actions/home'

class Home extends Component{
    componentDidMount(){
        if(this.props.sliders.length == 0){
            this.props.getSliders();
        }
    }
    render(){
        return (
            <div className='mHome'>
                <HomeHeader/>
                <div className='mContent'>
                    <Slider sliders={this.props.sliders}/>
                    <Kind/>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.home,
    actions
)(Home)