import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter as Router,
    NavLink,
    Route
} from 'react-router-dom'

import Home from '../../container/Home/homeIndex';
import Profile from '../../container/Profile/profileIndex';
import Search from '../../container/Search/searchIndex';

export default class App extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Route path='/' exact component={Home}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/search' component={Search}/>
                </div>
            </Router>
        )
    }
}
