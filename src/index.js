import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'

import App from './container/App/appIndex';

ReactDOM.render(<Provider>
    <App/>
</Provider>,document.querySelector('#root'));
