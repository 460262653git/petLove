import React,{Component} from 'react';
import Loading from '../../../component/Loading/loadIndex'
import {Link} from 'react-router-dom'
import './kindLess.less';

export default class Kind extends Component{
    render(){
        {/* <div onClick={()=>this.props.getDetails(item.id)} className='mKind' key={index}>*/}
        return (
            <div className='mClass'>
                <div className='mClass-title'>
                    <a href="">宠物美图</a>
                </div>
                {
                    this.props.kinds.kindList.map((item,index)=>(
                        <Link to={'/detail/'+item.id}  key={index}>
                            <div className='mKind'>
                            <img className='mKink-img' src={item.url}/>
                            <div className='mKind-info'>
                                <p className='mKind-name'>{item.name}</p>
                                <p className='mKind-habitat'>原产地：{item.habitat}</p>
                                <p className='mKind-shape'>体型：{item.shape}</p>
                                <p className='mKind-referencePrice'>
                                    参考价格：
                                    <i>{item.referencePrice}</i>
                                </p>
                            </div>
                        </div></Link>
                    ))
                }
                {
                    this.props.kinds.loading?<Loading/>:this.props.kinds.hasMore?null:<div className='load-status'>别再扯了!我是有底线的</div>
                }
            </div>
        )
    }
}
