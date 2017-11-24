import * as types from '../action-types';
import {fetchAddress} from '../../api/profile';

export default {
    // 获取收货地址信息
    getAddressList(){
        return dispatch=>{
            fetchAddress().then(addressList=>{
                dispatch({
                    type:types.ADD_ADDRESS,
                    payload:addressList
                })
            })
        }
    }
}