import React,{Component} from 'react';
import './appLess.less'

import {
    HashRouter as Router,
    NavLink,
    Route
} from 'react-router-dom'

import Home from '../../container/Home/homeIndex';
import Profile from '../../container/Profile/profileIndex';
import Search from '../../container/Search/searchIndex';
import Login from '../../container/Login/login'
import Signup from '../../container/Signup/signup'

import Detail from '../../component/Detail/detail'
import Favourable from '../../container/Profile/Favourable/index'
import Address from '../../container/Profile/Address/address'
import Collect from '../../container/Profile/Collect/collect'
import Footprint from '../../container/Profile/Footprint/footprint'
import Service from '../../container/Profile/Service/server'
import Tab from '../../component/Tab/tabIndex'


export default class App extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Route path='/' exact component={Home}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/search' component={Search}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/favourable' component={Favourable}/>
                    <Route path='/address' component={Address}/>
                    <Route path='/collect' component={Collect}/>
                    <Route path='/footprint' component={Footprint}/>
                    <Route path='/service' component={Service}/>
                    <Route path='/detail' component={Detail}/>
                    <Tab/>
                </div>
            </Router>
        )
    }
}
