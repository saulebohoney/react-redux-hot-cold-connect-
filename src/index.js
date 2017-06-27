import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Game from './components/game';
import * as logs from './temp.js';

import './reset.css';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
    <Game />
    </Provider>,
    document.getElementById('root')
);
