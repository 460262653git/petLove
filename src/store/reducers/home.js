import * as types from '../action-types';

let initState = {
    sliders:[],
    kinds:{
        hasMore:true,
        loading:'',
        list:[],
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
        default :
            return state;
    }
}