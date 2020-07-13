import {createStore, bindActionCreators} from 'redux';
import counter from './reduser';
import * as action from './actions';

const store = createStore(counter);
const {dispatch} = store;

const {inc, dec, res} = bindActionCreators(action, dispatch);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('res').addEventListener('click', res);

//  функция обновляет counter
const update = () => {
    document.getElementById('counter').textContent = store.getState();
};

// при каждом изменении
store.subscribe(update);
