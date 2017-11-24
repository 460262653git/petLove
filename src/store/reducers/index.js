import {combineReducers} from 'redux';
import home from './home';
import session from './session'
import profile from './profile'

export default combineReducers({
    home,
    session,
    profile
})