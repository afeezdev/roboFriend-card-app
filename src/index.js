import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'tachyons';

import App from './containers/App'; 
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import './index.css';

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root')
    );
    
    serviceWorker.register();