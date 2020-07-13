import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from 'redux';
import counter from './reduser';
import * as action from './actions';
import Counter from './components/counter';

const store = createStore(counter);
const {dispatch} = store;

const {inc, dec, res} = bindActionCreators(action, dispatch);

const update = () => {
    ReactDOM.render(<Counter
        counter={store.getState()}
        inc={inc}
        dec={dec}
        res={res}/>, document.getElementById('root'));
};
update();

store.subscribe(update);

