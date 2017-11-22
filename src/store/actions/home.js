import * as types from '../action-types';
import {fetchSliders,fetchKinds,fetchPet} from '../../api/home';

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
    //开始获取home页面的开始
    getKinds(){
        return(dispatch,getState)=>{
            let {loading,hasMore,offset,limit} = getState().home.kinds;
            if(!loading&&hasMore){
                dispatch({
                    type:types.FETCH_KINDS
                });
                dispatch({
                    type:types.FETCH_KINDS_FINISH,
                    payload:fetchKinds(offset,limit)
                })
            }
        }
    },
    // 刷新页面
    getRefresh(){
        return (dispatch,getState)=>{
            let {loading,hasMore,offset,limit} = getState().home.kinds;
            if(!loading){
                dispatch({
                    type:types.FETCH_KINDS
                });
                dispatch({
                    type:types.FETCH_KINDS_FINISH,
                    payload:fetchKinds(0,limit)
                })
            }
        }
    },
    getDetails(id){
        return dispatch=>{
            fetchPet(id).then(pet=>{
                console.log(pet);
                dispatch({
                    type:types.DETAIL_ID,
                    payload:pet
                })
            })
        }
    }
}