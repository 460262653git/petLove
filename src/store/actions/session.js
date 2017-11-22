import * as types from '../action-types';

import {signup,login,validate} from '../../api/session'

import {push} from 'react-router-redux';

export default {
    signup(data){
        return dispatch=>{
            signup(data).then(payload=>{
                dispatch({
                    type:types.SIGN_UP,
                    payload
                });
                let {code} = payload;
                if(code == 0){
                    window.location.href='http://'+window.location.host+'/#/login'
                }
            })
        }
    },
    login(data){
        return dispatch=>{
            login(data).then(payload=>{
                dispatch({
                    type:types.LOGIN,
                    payload
                });
                let {code} = payload;
                if(code == 0){
                    // dispatch(push('/'))
                    window.location.href='http://'+window.location.host+'/#/'
                }
            })
        }
    },
    validate(){
        return dispatch=>{
            validate().then(payload=>{
                dispatch({
                    type:types.VALIDATE,
                    payload
                })
            })
        }
    }
}