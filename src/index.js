import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'babel-polyfill';

import App from 'components/App';
import rootReducer from 'modules';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>,
    document.getElementById('app')
);