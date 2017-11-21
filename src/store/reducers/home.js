import * as types from '../action-types';

let initState = {
    sliders:[],
    kinds:{
        hasMore:true,
        loading:'',
        kindList:[],
        offset:0,
        limit:8
    }
};

export default function (state=initState,action) {
    switch (action.type){
        case types.FETCH_SLIDERS:
            return {
                ...state,
                sliders:action.payload.sliders
            };
        case types.FETCH_KINDS:
            return {
                ...state,
                kinds:{
                    ...state.kinds,
                    loading:'加载中'
                }
            };
        case types.FETCH_KINDS_FINISH:
            return {
                ...state,
                kinds:{
                    ...state.kinds,
                    loading:'',
                    hasMore:action.payload.hasMore,
                    kindList:[...state.kinds.kindList,...action.payload.kindList],
                    offset:state.kinds.offset+action.payload.kindList.length
                }
            };
        case types.FETCH_REFRESH:
            return {
                ...state,
                kinds:{
                    ...state.kinds,
                    loading:'',
                    hasMore:action.payload.hasMore,
                    kindList:action.payload.kindList,
                    offset:action.payload.kindList.length
                }
            };
        default :
            return state;
    }
}