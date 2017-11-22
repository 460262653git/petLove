import * as types from '../action-types';

let initState = {
    user:null,
    error:null,
    success:null
};

export default function (state=initState,action) {
    switch (action.type){
        case types.SIGN_UP:
            var {user,error,success} = action.payload;
            return {
                ...state,
                error,
                success
            };
        case types.LOGIN:
            var {user,error,success} = action.payload;
            return {
                ...state,
                user,success,error
            };
        case types.VALIDATE:
            let {code,user} = action.payload;
            if(code == 0){
                return {...state,user}
            }else{
                return state
            }
        default:
            return state ;
    }
}