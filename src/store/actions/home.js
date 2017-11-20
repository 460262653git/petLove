import * as types from '../action-types';
import {fetchSliders,fetchKinds} from '../../api/home';

export default {
    // 获取轮播图
    getSliders(){
        return dispatch=>{
            fetchSliders().then(sliders=>{
                dispatch({
                    type:types.FETCH_SLIDERS,
                    payload:{sliders}
                })
            })
        }
    },
    getKinds(){
        return(dispatch,getState)=>{

        }
    }
}