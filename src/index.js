import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store'

import App from './container/App/appIndex';

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>,document.querySelector('#root'));
