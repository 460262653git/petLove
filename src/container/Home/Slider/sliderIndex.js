import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import './sliderLess.less'
export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state={index:0}
    }
    render(){
        // console.log(this.props.sliders)
        let swipeOptions={
            continuous:true,
            auto:3000,
            callback:(index)=>{
                this.setState({index})
            }
        };
        return (
            <div className='carousel-wrapper'>
                {
                    this.props.sliders.length>0?
                        <ReactSwipe className='carousel' swipeOptions={swipeOptions}>
                            {
                                this.props.sliders.map((item,index)=>(
                                    <div key={index}>
                                        <img src={item}/>
                                    </div>
                                ))
                            }
                        </ReactSwipe>:null
                }
                <div className='mDots'>
                    {
                        this.props.sliders.map((item,index)=>{
                           return <span key={index} className={this.state.index == index ? 'active':''}></span>
                        })
                    }
                </div>
            </div>
        )
    }
}
