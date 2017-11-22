import React,{Component} from 'react';

import './detail.less';


export default class Home extends Component{
    handleClick=()=>{
        this.props.history.goBack();
    }
    render(){
        return (
            <div className='mDetail'>
                <div className='mDetail-header'>
                    <i onClick={this.handleClick} className='iconfont icon-fanhui'></i>
                    <span>爱宠详情</span>
                </div>
                <div className='mDetail-scroll'>
                    <div className='mDetail-introduce'>
                        <div className='mDetail-pic'>
                            <img src='http://res.ycw.com/app/images/book/breed/dog/G126/126-3.jpg'/>
                        </div>
                        <div className='mDetail-info'>
                            <p className='name'>萨摩耶</p>
                            <span className='habitat'>原产地：美国</span>
                            <span className='shape'>体型：小型</span>
                            <p className='price'>￥ 2000-3000元</p>
                            <div className='shoucang'>
                                <i className='iconfont icon-shoucang'></i>
                            </div>
                            <div className='information'>
                                萨摩耶犬萨摩耶犬以西伯利亚牧民族萨摩人而命名，一向被用来拉雪橇和看守驯鹿。萨摩耶犬以具有忍耐力与健壮的体格而闻名。欧洲探险家使用此犬从事南北极探险工作。此犬毛色很多，一般有黑色，黑白色，黑与黄褐色，最终以白色被毛品种占优势。许多年来，关于萨摩耶德犬的历史和传说如这种犬一样引人入胜。故事开始于伊朗高原，人类最早的居住地，强大的部落将弱小的部落（连同他们的家庭、牲畜和犬）都赶到很远的地方，以保证自己有充足的食物。被赶走的部落一直向北走，穿过中国（世界文化中心之一），来到白海和叶塞尼河之间的广阔冻土带。他们发现在冰雪的天然屏障后很安全。这些人就是萨摩耶人，塞亚特斯的最早居民。萨摩耶人被认为是纯种蒙古人和芬兰人的过渡民族。在这里，他们一直过着游牧生活，放牧驯鹿。萨摩耶人饲养犬帮助他们放牧驯鹿，也让犬和他们做伴。经过几个世纪，萨摩耶德犬一直保持纯种。在所有现代犬种中，萨摩耶德犬是最接近原始的犬种之一，但没有混杂狼或狐的血统。北极的阳光和冰雪给了萨摩耶德犬一身洁白而有冰样光泽的皮毛。与人们的长期相处使萨摩耶德犬有着不可思议的理解力。作为驯鹿的保护者而不是杀手使萨摩耶德犬有独一无二的特征。原始居民们那种快乐的孩子气的性格在每只萨摩耶德犬身上都找得到。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}