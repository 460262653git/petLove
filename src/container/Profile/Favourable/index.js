import React,{Component} from 'react';
import './less.less';

export default class Favourable extends Component{
    constructor(props){
        super(props);
        this.state ={};
    }
    handleClick=()=>{
        this.props.history.goBack();
    };
    render(){
        return (
            <div className='mFavourable'>
                    <div className='mFavourable-header'>
                        <i onClick={this.handleClick} className='iconfont icon-fanhui'></i>
                        <span>我的优惠券</span>
                    </div>
                <div className='parent'>
                    <div className='mFavourable-kind'>
                        <p className='mFavourable-no'>未使用</p>
                        <ul className='mFavourable-list'>
                            <li className='mFavourable-item'>
                            <span className='mFavourable-money'>
                                <i>￥</i><br/>
                                <strong>1000</strong>
                            </span>
                                <div className='mFavourable-text'>
                                    <p className='jian'>满3000减200</p>
                                    <p className='limited'>仅限有宠APP使用</p>
                                    <p className='date'>20175.20 - 2018.2.10</p>
                                </div>
                            </li>
                            <li className='mFavourable-item'>
                            <span className='mFavourable-money'>
                                <i>￥</i><br/>
                                <strong>1000</strong>
                            </span>
                                <div className='mFavourable-text'>
                                    <p className='jian'>满3000减200</p>
                                    <p className='limited'>仅限有宠APP使用</p>
                                    <p className='date'>20175.20 - 2018.2.10</p>
                                </div>
                            </li>
                            <li className='mFavourable-item'>
                            <span className='mFavourable-money'>
                                <i>￥</i><br/>
                                <strong>1000</strong>
                            </span>
                                <div className='mFavourable-text'>
                                    <p className='jian'>满3000减200</p>
                                    <p className='limited'>仅限有宠APP使用</p>
                                    <p className='date'>20175.20 - 2018.2.10</p>
                                </div>
                            </li>
                            <li className='mFavourable-item'>
                            <span className='mFavourable-money'>
                                <i>￥</i><br/>
                                <strong>1000</strong>
                            </span>
                                <div className='mFavourable-text'>
                                    <p className='jian'>满3000减200</p>
                                    <p className='limited'>仅限有宠APP使用</p>
                                    <p className='date'>20175.20 - 2018.2.10</p>
                                </div>
                            </li>
                            <li className='mFavourable-item'>
                            <span className='mFavourable-money'>
                                <i>￥</i><br/>
                                <strong>1000</strong>
                            </span>
                                <div className='mFavourable-text'>
                                    <p className='jian'>满3000减200</p>
                                    <p className='limited'>仅限有宠APP使用</p>
                                    <p className='date'>20175.20 - 2018.2.10</p>
                                </div>
                            </li>
                            <li className='mFavourable-item'>
                            <span className='mFavourable-money'>
                                <i>￥</i><br/>
                                <strong>1000</strong>
                            </span>
                                <div className='mFavourable-text'>
                                    <p className='jian'>满3000减200</p>
                                    <p className='limited'>仅限有宠APP使用</p>
                                    <p className='date'>20175.20 - 2018.2.10</p>
                                </div>
                            </li>
                            <li className='mFavourable-item'>
                            <span className='mFavourable-money'>
                                <i>￥</i><br/>
                                <strong>1000</strong>
                            </span>
                                <div className='mFavourable-text'>
                                    <p className='jian'>满3000减200</p>
                                    <p className='limited'>仅限有宠APP使用</p>
                                    <p className='date'>20175.20 - 2018.2.10</p>
                                </div>
                            </li>
                            <li className='mFavourable-item'>
                            <span className='mFavourable-money'>
                                <i>￥</i><br/>
                                <strong>1000</strong>
                            </span>
                                <div className='mFavourable-text'>
                                    <p className='jian'>满3000减200</p>
                                    <p className='limited'>仅限有宠APP使用</p>
                                    <p className='date'>20175.20 - 2018.2.10</p>
                                </div>
                            </li>
                            <li className='mFavourable-item'>
                            <span className='mFavourable-money'>
                                <i>￥</i><br/>
                                <strong>1000</strong>
                            </span>
                                <div className='mFavourable-text'>
                                    <p className='jian'>满3000减200</p>
                                    <p className='limited'>仅限有宠APP使用</p>
                                    <p className='date'>20175.20 - 2018.2.10</p>
                                </div>
                            </li>
                            <li className='mFavourable-item'>
                            <span className='mFavourable-money'>
                                <i>￥</i><br/>
                                <strong>1000</strong>
                            </span>
                                <div className='mFavourable-text'>
                                    <p className='jian'>满3000减200</p>
                                    <p className='limited'>仅限有宠APP使用</p>
                                    <p className='date'>20175.20 - 2018.2.10</p>
                                </div>
                            </li>
                            <li className='mFavourable-item'>
                            <span className='mFavourable-money'>
                                <i>￥</i><br/>
                                <strong>1000</strong>
                            </span>
                                <div className='mFavourable-text'>
                                    <p className='jian'>满3000减200</p>
                                    <p className='limited'>仅限有宠APP使用</p>
                                    <p className='date'>20175.20 - 2018.2.10</p>
                                </div>
                            </li>
                            <li className='mFavourable-item'>
                            <span className='mFavourable-money'>
                                <i>￥</i><br/>
                                <strong>1000</strong>
                            </span>
                                <div className='mFavourable-text'>
                                    <p className='jian'>满3000减200</p>
                                    <p className='limited'>仅限有宠APP使用</p>
                                    <p className='date'>20175.20 - 2018.2.10</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
