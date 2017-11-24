import * as types from '../action-types';

let initState={
    addressList:[]
}

export default function (state=initState,action) {
    switch(action.type){
        case types.ADD_ADDRESS:
            return{
                ...state,
                addressList:action.payload
            };
        default:
            return state;
    }
}